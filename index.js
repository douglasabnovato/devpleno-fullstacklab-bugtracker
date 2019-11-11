const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended:true }))

app.get('/', (request, response) => {
    response.render('home')
})

app.post('/', (request, response) => {
    response.send('postou')
})

app.listen(3000)