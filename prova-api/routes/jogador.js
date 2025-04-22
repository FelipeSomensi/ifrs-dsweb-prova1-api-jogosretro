const express = require("express");
const router = express.Router();
const jogadorController = require("../controllers/jogadorController");

// Rota GET /jogador - lista todos os jogador
router.get("/", jogadorController.listar);

// Rota GET /jogador/:id - busca jogo por ID
router.get("/:id", jogadorController.buscarPorId);

// Rota POST /jogador - adiciona novo jogador
router.post("/", jogadorController.adicionar);

// Rota DELETE /jogos/:id - remove um jogador
router.delete("/:id", jogadorController.deletar);

module.exports = router;