## Fullstack Lab - BUG TRACKER

### Atualização: 14 de novembro de 2019 - 11:50
### Criação: 09 de novembro de 2019
### Prática : @douglasabnovato

### Ferramentas : 

![ReactJS](/images/logo-reactjs.jpg)
![Git](/images/logo-git.png)
![Github](/images/logo-github.png)
![HTML/CSS/Javascript](/images/logo-html-css-js.jpeg)
![VSCode](/images/logo-VSCode.png)
![Yarn](/images/logo-yarn.png)
![Nodejs](/images/logo-nodejs.png)
![Google Chrome](/images/logo-google-chrome.jpg)
![NPM](/images/logo-npm.png)
![Bootstrap](/images/logo-bootstrap.jpg)

### Desafio :

![Desafio](/images/desafio.jpg)

#### Preparando o Ambiente
`https://el2.convertkit-mail.com/c/v8uorq332eirhodo99fg/mncw7xkei5h9zpn2kk/aHR0cDovL2JpdC5seS9mc2xtYXRlcmlhbGV4dHJh`
- NodeJS: executar o javascript no servidor
- NPM: node package manager, é um gerenciador de dependências
- VSCODE: o editor de código
- Google Chrome: browser para inspecionar o código da aplicação e visualizar o resultado visual do projeto

#### Aula Extra 1: Primeiros passos com JavaScript - Fullstack Lab
`https://www.youtube.com/watch?v=t6uBa6p94wo`

#### Aula Extra 2: Assincronismo em JS: O que você PRECISA saber - Fullstack Lab
`https://www.youtube.com/watch?v=sTBNHwPkpCg`

#### Fullstack Lab - Aula 1 : Nov 4, 2019
`https://www.youtube.com/watch?v=AbK1_5ntLyg`
- Projeto BUG TRACKER
- Fullstack developer  
- frontend: html, javascript, css
- backend: nodejs, mysql 

#### Fullstack Lab - Aula 2 : Nov 6, 2019
`https://www.youtube.com/watch?v=potiA3YWvB4`
- C:\douglasabnovato\devPleno\fullstack-lab\bugtracker
- `npm init`
- `npm install express`
- `node index.js`
- `http://localhost:3000/soma?a=10&b=22`
- `npm install ejs` 
- tratar formulário: `npm install body-parser`
- tabela de dados: google api console
- Google Drive API
- Google Cloud Platform
- `npm install google-spreadsheet`
- testar-planilhas.js: arquivo para testar inserir informações em excel do google drive

#### Fullstack Lab - Aula 3 : Nov 8, 2019
`https://youtu.be/LYBcsK972u0`
- tornando o código mais objetivo e de melhor entendimento
````javascript
const doc = new GoogleSpreadSheet('1PvX1bAA2VeUjeZGdNuJf1rVJSbMJslqoF0rOw_JYe7o')
doc.useServiceAccountAuth(credentials, (err) => {
    if(err){
        console.log('Não foi possível abrir essa planilha.')
    } else {
        console.log('Planilha aberta.')
        doc.getInfo((err, info) => {
            const worksheet = info.worksheets[0]
            worksheet.addRow({ name: 'Túlio', email: 'tulio@faria.com.br'}, err => {
                console.log('linha inserida')
            })  
        })
    }
})
````
- adicionando mais colunas na nossa planilha que armazena os dados do formulário API do Google Cloud Platform
- sendGrid: envio de e-mails automatizados: `https://sendgrid.com/`
- `npm install --save @sendgrid/mail`
- layout : Bootstrap : `https://getbootstrap.com/`

:. De `Fullstack Lab - Dev Pleno`.<br/> 
Por Túlio Faria