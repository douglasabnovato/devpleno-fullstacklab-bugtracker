const GoogleSpreadSheet = require('google-spreadsheet')
const credentials = require('./bugtracker')

const doc = new GoogleSpreadSheet('1PvX1bAA2VeUjeZGdNuJf1rVJSbMJslqoF0rOw_JYe7o')

doc.useServiceAccountAuth(credentials, (err) => {
    if(err){
        console.log('Não foi possível abrir a planilha.')
    } else {
        console.log('Planilha aberta.')
    }
})