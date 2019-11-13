const GoogleSpreadSheet = require('google-spreadsheet')
const credentials = require('./bugtracker.json')
const { promisify } = require('util')

const addRowToSheet = async () => {
    const doc = new GoogleSpreadSheet('1PvX1bAA2VeUjeZGdNuJf1rVJSbMJslqoF0rOw_JYe7o')
    await promisify(doc.useServiceAccountAuth)(credentials)
    console.log('Planilha aberta.')
    const info = await promisify(doc.getInfo)()
    const worksheet = info.worksheets[0]
    await promisify(worksheet.addRow)({ name: 'Túlio', email: 'tulio@faria.com.br'})
}

addRowToSheet()