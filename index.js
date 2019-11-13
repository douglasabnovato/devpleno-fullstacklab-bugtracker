const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

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

app.post('/', (request, response) => {
    
    const doc = new GoogleSpreadSheet(docId)

    doc.useServiceAccountAuth(credentials, (err) => {
        if(err){
            console.log('Não foi possível abrir essa planilha.')
        } else {
            console.log('Planilha aberta.')
            doc.getInfo((err, info) => {
                const worksheet = info.worksheets[worksheetIndex]
                worksheet.addRow({ name: request.body.name, email: request.body.email}, err => {
                    response.send('bug reportado com sucesso.')
                })            
            })
        }
    })    
})

app.listen(3000, (err) => {
    if(err) {
        console.log('aconteceu erro', err)
    } else {
        console.log('bugtracker rodando na porta 3000')
    }
})