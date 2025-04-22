// Importa o framework Express, responsável por criar o servidor e gerenciar as rotas
const express = require("express");
// Inicializa o aplicativo Express
const app = express();
// Importa as rotas do módulo de jogos
const jogosRoutes = require("./routes/jogos");
// Importa as rotas do módulo de jogador
const jogadorRoutes = require("./routes/jogador");
// Importa as rotas do módulo de pontuacao
const pontuacaoRotes = require("./routes/pontuacao");
// Middleware do Express para permitir o uso de JSON no corpo das requisições (body-parser embutido)
app.use(express.json());
// Usa as rotas de livros com o prefixo /livros
// Exemplo: GET /livros, POST /livros
app.use("/jogos", jogosRoutes);
// Usa as rotas de editoras com o prefixo /editoras
// Exemplo: GET /editoras, POST /editoras
app.use("/jogador", jogadorRoutes);
// Usa as rotas de editoras com o prefixo /editoras
// Exemplo: GET /editoras, POST /editoras
app.use("/pontuacao", pontuacaoRotes);
// Inicia o servidor e o faz escutar na porta 3000
// Quando estiver rodando, exibe uma mensagem no terminal
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});