const express = require("express");
const router = express.Router();
const jogoController = require("../controllers/jogoController");

// Rota GET /jogos - lista todos os jogo
router.get("/", jogoController.listar);

// Rota GET /jogos/:id - busca jogo por ID
router.get("/:id", jogoController.buscarPorId);

// Rota POST /jogos - adiciona novo jogo
router.post("/", jogoController.adicionar);

// Rota PUT /jogos/:id - atualiza um jogo
router.put("/:id", jogoController.atualizar);

// Rota DELETE /jogos/:id - remove um jogo
router.delete("/:id", jogoController.deletar);

module.exports = router;