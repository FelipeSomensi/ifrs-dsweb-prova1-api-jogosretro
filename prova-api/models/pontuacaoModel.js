const connection = require("../config/db");

exports.buscarTodos = (callback) => {
    connection.query("SELECT * FROM tapontuacoes", callback);
};

exports.ranking = (id_tajogo, callback) => {
    connection.query("SELECT * FROM tapontuacoes WHERE id_tajogo = ? ORDER BY pontuacao DESC  LIMIT 10", [id_tajogo], callback);
};

exports.inserir = (dados, callback) => {
    const { idJogo, idJogador, pontuacao } = dados;
    const sql = "INSERT INTO tapontuacoes (id_tajogo, id_tajogador, pontuacao) VALUES (?, ?, ?)";
    connection.query(sql, [idJogo, idJogador, pontuacao], callback);
};