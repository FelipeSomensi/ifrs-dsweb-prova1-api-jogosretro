const jogadorModel = require("../models/jogadorModel");

exports.listar = (req, res) => {
    jogadorModel.buscarTodos((err, results) => {
        if (err) return res.status(500).send("Erro ao listar jogadores");
        res.json(results);
    }); // Retorna os jogadores como JSON
};

// Busca um jogador pelo ID
exports.buscarPorId = (req, res) => {
    jogadorModel.buscarPorId(req.params.id, (err, results) => {
        if (err) return res.status(500).send("Erro ao buscar jogador");
        if (results.length === 0) return res.status(404).send("Jogador não encontrado");
        res.json(results[0]);
    });
};

// Adiciona um novo jogador após validar os campos
exports.adicionar = (req, res) => {
    const { nome, nickname } = req.body;

    if (!nome || !nickname) {
        return res.status(400).send("Todos os campos são obrigatórios.");
    }

    // Verifica se o nickname já existe
    jogadorModel.buscarPorNickname(nickname, (err, jogadorExistente) => {
        if (err) return res.status(500).send("Erro ao verificar nickname.");
        if (jogadorExistente) {
            return res.status(409).send("Nickname já está em uso.");
        }

        // Se não existe, insere o jogador
        jogadorModel.inserir(req.body, (err) => {
            if (err) return res.status(500).send("Erro ao adicionar jogador.");
            res.status(201).send("Jogador adicionado com sucesso.");
        });
    });
};

// Exclui um jogador pelo ID
exports.deletar = (req, res) => {
    jogadorModel.deletar(req.params.id, (err, result) => {
        if (err) return res.status(500).send("Erro ao deletar jogador");
        if (result.affectedRows === 0) return res.status(404).send("jogador não encontrado");
        res.send("jogador deletado com sucesso");
    });
};


