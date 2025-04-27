const connection = require("../config/db");

exports.buscarTodos = (callback) => {
    connection.query("SELECT * FROM tajogador", callback);
};

// Retorna um jogador específico pelo ID
exports.buscarPorId = (id, callback) => {
    connection.query("SELECT * FROM tajogador WHERE id = ?", [id], callback);
};

exports.buscarPorNickname = (nickname, callback) => {
    const sql = "SELECT * FROM tajogador WHERE nickname = ?";
    connection.query(sql, [nickname], (err, resultados) => {
        if (err) return callback(err);
        callback(null, resultados[0]); 
    });
};

exports.inserir = (dados, callback) => {
    const { nome, nickname } = dados;
    const sql = "INSERT INTO tajogador (nome, nickname) VALUES (?, ?)";
    connection.query(sql, [nome, nickname], callback);
};

// Exclui um jogo com base no ID
exports.deletar = (id, callback) => {
    connection.query("DELETE FROM tajogador WHERE id = ?", [id], callback);
};

