const express = require("express");
const router = express.Router();
const connection = require("../config/db");
router.get("/", (req, res) => {
    connection.query("SELECT * FROM tajogo", (err, results) => {
        if (err) return res.status(500).send("Erro ao buscar jogos");
        res.json(results);
    });
});

router.post("/", (req, res) => {
    const { nome, plataforma, ano_lancamento } = req.body;
    const sql = "INSERT INTO tajogo (nome, plataforma, ano_lancamento) VALUES (?, ?, ?)";

    connection.query(sql, [nome, plataforma, ano_lancamento], (err) => {
        if (err) return res.status(500).send("Erro ao inserir jogo");
        res.status(201).send("Jogo inserido com sucesso");
    });
});
module.exports = router;