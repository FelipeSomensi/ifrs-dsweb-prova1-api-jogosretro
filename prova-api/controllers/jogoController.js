const jogoModel = require("../models/jogoModel");

exports.listar = (req, res) => {
    jogoModel.buscarTodos((err, results) => {
        if (err) return res.status(500).send("Erro ao listar jogos");
        res.json(results);
    }); // Retorna os jogos como JSON
};

// Busca um jogo pelo ID
exports.buscarPorId = (req, res) => {
    jogoModel.buscarPorId(req.params.id, (err, results) => {
        if (err) return res.status(500).send("Erro ao buscar jogo");
        if (results.length === 0) return res.status(404).send("Jogo não encontrado");
        res.json(results[0]);
    });
};

// Adiciona um novo jogo após validar os campos
exports.adicionar = (req, res) => {
    const { nome, plataforma, ano_lancamento } = req.body;
    if (!nome || !plataforma || !ano_lancamento) {
        return res.status(400).send("Todos os campos são obrigatórios.");
    }

    if (plataforma != "Super Nintendo" && plataforma != "Mega Drive" && plataforma != "Atari") {
        return res.status(400).send("Plataforma invalida.");
    }

    jogoModel.inserir(req.body, (err) => {
        if (err) return res.status(500).send("Erro ao adicionar jogo");
        res.status(201).send("Jogo adicionado com sucesso");
    });
};

// Atualiza um jogo existente
exports.atualizar = (req, res) => {
    const { nome, plataforma, ano_lancamento } = req.body;
    if (!nome || !plataforma || !ano_lancamento) {
        return res.status(400).send("Todos os campos são obrigatórios.");
    }

    if (plataforma != "Super Nintendo" && plataforma != "Mega Drive" && plataforma != "Atari") {
        return res.status(400).send("Plataforma invalida.");
    }

    jogoModel.atualizar(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).send("Erro ao atualizar jogo");
        if (result.affectedRows === 0) return res.status(404).send("Jogo não encontrado");
        res.send("Jogo atualizado com sucesso");
    });
};

// Exclui um jogo pelo ID
exports.deletar = (req, res) => {
    jogoModel.deletar(req.params.id, (err, result) => {
        if (err) return res.status(500).send("Erro ao deletar jogo");
        if (result.affectedRows === 0) return res.status(404).send("Jogo não encontrado");
        res.send("jogo deletado com sucesso");
    });
};

 // Retorna os 3 jogos mais populares
exports.jogosPopulares = (req, res) => {
    jogoModel.jogosPopulares((err, results) => {
        if (err) return res.status(500).send("Erro ao listar os 3 jogos mais populares");
        res.json(results);
    });
};