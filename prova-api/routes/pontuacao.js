const express = require("express");
const router = express.Router();
const pontuacaoController = require("../controllers/pontuacaoController");

// Rota GET /pontuacao - lista todos os pontuacao
router.get("/", pontuacaoController.listar);

// Rota POST /pontuacao - adiciona novo pontuacao
router.post("/", pontuacaoController.adicionar);

// Rota GET /ranking/:idJogo - lista o ranking de 
router.get("/ranking/:idJogo", pontuacaoController.ranking);

module.exports = router;