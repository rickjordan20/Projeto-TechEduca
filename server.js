// 1 - Inporta o Express - ele cria e gerencia o nosso servidor
const express = require("express");

// 2 - Importa o CORS - permite que o navegador "converse" com o servidor
const cors = require("cors");

// 3 - Cria o servidor (como ligar um computador)
const app = express();

// 4 - Ativa o CORS - libera a comunicação entre o front-end e o back-end
app.use(cors());

// 5 - Ativa o leitor de JSON - permite entender os dados recebidos
// sem isso, o servidor não consegue ler o  que o formulário envia
app.use(express.json());