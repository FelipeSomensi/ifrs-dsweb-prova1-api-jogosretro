const pontuacaoModel = require("../models/pontuacaoModel");
const jogoModel = require("../models/jogoModel");
const jogadorModel = require("../models/jogadorModel");

exports.listar = (req, res) => {
    pontuacaoModel.buscarTodos((err, results) => {
        if (err) return res.status(500).send("Erro ao listar pontuacoes");
        res.json(results);
    }); // Retorna as pontuacoes como JSON
};

// Retorna as pontuacoes como JSON
exports.ranking = (req, res) => {
    pontuacaoModel.ranking(req.params.idJogo, (err, results) => {
        if (err) return res.status(500).send("Erro ao buscar ranking");
        if (results.length === 0) return res.status(404).send("pontuacoes não encontradas");
        res.json(results);
    });
};

exports.adicionar = (req, res) => {
    const { idJogo, idJogador, pontuacao } = req.body;
    if (!idJogo || !idJogador || !pontuacao) {
        return res.status(400).send("Todos os campos são obrigatórios.");
    }

    if (pontuacao < 0) {
        return res.status(400).send("Pontuação dever ser positiva");
    }

    jogadorModel.buscarPorId(idJogador, (err, jogadorExistente) => {
        if (err) return res.status(500).send("Erro ao verificar jogador.");
        if (jogadorExistente.length === 0) {
            return res.status(409).send("Jogador não existe");
        }

        jogoModel.buscarPorId(idJogo, (err, jogoExistente) => {
            if (err) return res.status(500).send("Erro ao verificar jogo.");
            
            if (jogoExistente.length === 0) {
                return res.status(409).send("Jogo não existe");
            }

            pontuacaoModel.inserir(req.body, (err) => {
                if (err) return res.status(500).send("Erro ao adicionar pontuação");
                res.status(201).send("Pontuação adicionada com sucesso");
            });
        });
    });
};

