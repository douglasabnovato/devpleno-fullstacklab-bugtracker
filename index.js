const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const { promisify } = require('util')

const GoogleSpreadSheet = require('google-spreadsheet')
const credentials = require('./bugtracker.json')

const docId = '1PvX1bAA2VeUjeZGdNuJf1rVJSbMJslqoF0rOw_JYe7o'
const worksheetIndex = 0


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
            email: request.body.email
        })
        response.send('bug reportado com sucesso')
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