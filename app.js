const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'rot',
    password: 'acesso123',
    database: 'nome_do_seu_banco_de_dados'
});

db.connect((err) => {
    if (err) {
        console.error(`Erro na conexão com o banco de dados: ${err}`);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

module.exports = db;