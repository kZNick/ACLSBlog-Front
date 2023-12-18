## Iniciando o projeto
Para começar, certifique-se de ter o Node.js instalado em seu computador. Em seguida, siga os passos abaixo:

1. Clone este repositório para o seu computador usando o seguinte comando:
    ```bash
   git clone https://github.com/kZNick/ACLSBlog-Front

2. Instale as dependências do projeto utilizando o gerenciador de pacotes de sua preferência. Se você usa Yarn, execute: yarn install

Se você prefere npm, execute: npm install

3. Escolha a API a ser usada:

Produção: A API em produção hospedada no Render
Local: A API local hospedada em http://localhost:3001
Para escolher a API em produção, abra o arquivo src/services/api.js e comente as linhas correspondentes à API local e descomente as linhas correspondentes à API em produção.

Exemplo (API em produção):import axios from "axios";

export const apiContacts = axios.create({
    baseURL: "https://apiaclsforum.onrender.com",
    timeout: 55000
});

Exemplo (API local):import axios from "axios";

export const apiContacts = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 5000
});

# Executando o projeto
Após a instalação das dependências e a escolha da API, você pode executar o projeto em um ambiente de desenvolvimento. Use o seguinte comando, dependendo do gerenciador de pacotes escolhido:

Usando Yarn: yarn start

Usando npm: npm run start

Isso iniciará o aplicativo em modo de desenvolvimento e abrirá uma nova janela do navegador em http://localhost:3000, onde você poderá visualizar o aplicativo.

O aplicativo será recarregado automaticamente sempre que você fizer alterações no código. Erros de lint também serão exibidos no console, caso ocorram.

Saiba Mais
Para saber mais sobre o Create React App, consulte a documentação.

Se você está aprendendo React, a documentação oficial do React é um recurso valioso.