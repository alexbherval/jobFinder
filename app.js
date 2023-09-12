// Invocando o express
const express = require('express');
// carregando o express no app
const app = express();
// carregando o arquivo de conexão com o banco de dados sqlite
const db = require('./db/connection')

const bodyParser = require('body-parser')

//Apontando uma porta para o servidor
const PORT = 3000;


app.listen(PORT, function() {
    console.log(`O Express está rodando na porta ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));


// db connections (Conexao com banco de dados)
db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso!")
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar ao sqlite", err)
    })
// routes (Rotas)
app.get('/', (req, res) => {
    res.send("Esta funcionando na Porta: " + PORT)
});

// jobs routes
app.use('/jobs', require('./routes/jobs'));