### BUG TRACKER

#### Objetivo

Uma aplicação web para permitir reportar bugs internamente de uma organização.

- Desafio: <br/> ![Desafio](/images/desafio.jpg)

#### Ferramentas / Tecnologias

Uma aplicação web responsiva, desenvolvida em html, css e javascript em modelo spa.
E para armazenar essas informações, utilizamos o Google Drive e suas planilhas. Para isso dar certo, o Google Cloud Platform permite essa interação dos dados.

Destaques: html, javascript, css, nodejs, reactjs, Express, mysql, NPM, VSCODE, Google Chrome, Google Cloud Platform, Google Drive API, Bootstrap, Now zeit.co, sendGrid.

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
![Google Cloud Platform](/images/logo-google-cloud-platform.jpg)

#### Tarefas

- [x] 1. Preparando o Ambiente
- [x] 1.1. `https://el2.convertkit-mail.com/c/v8uorq332eirhodo99fg/mncw7xkei5h9zpn2kk/aHR0cDovL2JpdC5seS9mc2xtYXRlcmlhbGV4dHJh`
- [x] 1.2. NodeJS: executar o javascript no servidor
- [x] 1.3. NPM: node package manager, é um gerenciador de dependências
- [x] 1.4. VSCODE: o editor de código
- [x] 1.5. Google Chrome: browser para inspecionar o código da aplicação e visualizar o resultado visual do projeto 
- [x] 2. Projeto BUG TRACKER
- [x] 2.1. Fullstack developer  
- [x] 2.2. frontend: html, javascript, css
- [x] 2.3. backend: nodejs, mysql 
- [x] 3. Detalhes das tecnologias do projeto
- [x] 3.1. Javascript, funções, variáveis, e muito mais.
- [x] 4. Express
- [x] 4.1. framework para criar aplicação web : `npm install express`
- [x] 4.2. `node index.js`
- [x] 4.3. `http://localhost:3000/soma?a=10&b=22`
- [x] 4.4. `npm install ejs` 
- [x] 4.5. tratar formulário: `npm install body-parser`
- [x] 4.6. tabela de dados: google api console
- [x] 4.7. Google Drive API
- [x] 4.8. Google Cloud Platform
- [x] 4.9. `npm install google-spreadsheet`
- [x] 4.10. testar-planilhas.js: arquivo para testar inserir informações em excel do google drive
- [x] 5. Assincronismo em JS 
- [x] 6. Refatorando
- [x] 6.1. Tornando o código mais objetivo e de melhor entendimento
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
- [x] 6.2. adicionando mais colunas na nossa planilha que armazena os dados do formulário API do Google Cloud Platform
- [x] 6.3. sendGrid: envio de e-mails automatizados: `https://sendgrid.com/`
- [x] 6.4. `npm install --save @sendgrid/mail`
- [x] 7. Design
- [x] 7.1. Bootstrap : `https://getbootstrap.com/`
- [x] 8. Deploy 
- [x] 8.1. colocar a aplicação no ar: `npm install -g now`
- [x] 8.2. Now - `zeit.co` 

#### Detalhes

- Criação: 14 de novembro de 2019
- Atualização: 09 de novembro de 2019
- Terminado: Sim 
- Publicado: [BUG TRACKER](https://bugtracker.douglasabnovato.now.sh)

#### Publicado

![BUG TRACKER](/images/tela-1.jpg)<br/>

:. [Linkedin - @douglasabnovato](https://www.linkedin.com/in/douglasabnovato/)<br/>
. De [Túlio Faria - Fullstack Lab - Dev Pleno](https://www.youtube.com/watch?v=AbK1_5ntLyg)