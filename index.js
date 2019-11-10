const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send(request.query);
})

app.get('/soma', (request, response) => {
    const a = parseInt(request.query.a);
    const b = parseInt(request.query.b);
    const soma = a + b
    response.send('Soma é ' + soma)
})

app.listen(3000)