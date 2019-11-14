const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const { promisify } = require('util')
const sgMail = require('@sendgrid/mail')

const GoogleSpreadSheet = require('google-spreadsheet')
const credentials = require('./bugtracker.json')

const docId = '1PvX1bAA2VeUjeZGdNuJf1rVJSbMJslqoF0rOw_JYe7o'
const worksheetIndex = 0
const sendGridKey = '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'

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended:true }))

app.get('/', (request, response) => {
    response.render('home')
})

app.post('/', async(request, response) => {
    try{
        const doc = new GoogleSpreadSheet(docId)
        await promisify(doc.useServiceAccountAuth)(credentials)
        const info = await promisify(doc.getInfo)()
        const worksheet = info.worksheets[worksheetIndex]
        await promisify(worksheet.addRow)({
            name: request.body.name,
            email: request.body.email,
            userAgent: request.body.userAgent,
            userDate: request.body.userDate,
            issueType: request.body.issueType,
            source: request.body.source || 'direct'
        })
        //se for crítico   
        if(request.body.issueType === 'CRITICAL') {
            sgMail.setApiKey(sendGridKey);
            const msg = {
            to: 'douglasabnovato@gmail.com',
            from: 'douglasabnovato@gmail.com',
            subject: 'BUG Critico',
            text: `
                O Usuário ${request.body.name} reportou o problema.
            `,
            html: `O Usuário ${request.body.name} reportou o problema.`,
        }
        await sgMail.send(msg);
        }           
        response.render('sucesso')
    } catch (err) {
        response.send('erro ao enviar formulário')
        console.log(err)
    }
})

app.listen(3000, (err) => {
    if(err) {
        console.log('aconteceu erro', err)
    } else {
        console.log('bugtracker rodando na porta 3000')
    }
})