const connection = require("../config/db");

exports.buscarTodos = (callback) => {
    connection.query("SELECT * FROM tajogo", callback);
};

// Retorna um jogo específico pelo ID
exports.buscarPorId = (id, callback) => {
    connection.query("SELECT * FROM tajogo WHERE id = ?", [id], callback);
};

exports.inserir = (dados, callback) => {
    const { nome, plataforma, ano_lancamento } = dados;
    const sql = "INSERT INTO tajogo (nome, plataforma, ano_lancamento) VALUES (?, ?, ?)";
    connection.query(sql, [nome, plataforma, ano_lancamento], callback);
};

// Atualiza um jogo existente com base no ID
exports.atualizar = (id, { nome, plataforma, ano_lancamento },
    callback) => {
    const sql = "UPDATE tajogo SET nome = ?, plataforma = ?, ano_lancamento = ? WHERE id = ?";
    connection.query(sql, [nome, plataforma, ano_lancamento, id],
        callback);
};

// Exclui um jogo com base no ID
exports.deletar = (id, callback) => {
    connection.query("DELETE FROM tajogo WHERE id = ?", [id], callback);
};