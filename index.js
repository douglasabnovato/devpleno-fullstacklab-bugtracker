const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Projeto BUG TRACKER no Treinamento Fullstack Lab da Dev Plano pelo Túlio Faria.')
})

app.listen(3000);