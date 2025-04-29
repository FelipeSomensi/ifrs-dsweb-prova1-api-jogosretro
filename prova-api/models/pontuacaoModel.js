const connection = require("../config/db");

exports.buscarTodos = (callback) => {
    connection.query("SELECT * FROM tapontuacoes", callback);
};

exports.ranking = (id_tajogo, callback) => {
    const sql = `
        SELECT 
            j.nickname,
            p.pontuacao
        FROM 
            tapontuacoes p
        INNER JOIN 
            tajogador j ON p.id_tajogador = j.id
        WHERE 
            p.id_tajogo = ?
        ORDER BY 
            p.pontuacao DESC
        LIMIT 10
    `;
    connection.query(sql, [id_tajogo], callback);
};

exports.inserir = (dados, callback) => {
    const { idJogo, idJogador, pontuacao } = dados;
    const sql = "INSERT INTO tapontuacoes (id_tajogo, id_tajogador, pontuacao) VALUES (?, ?, ?)";
    connection.query(sql, [idJogo, idJogador, pontuacao], callback);
};