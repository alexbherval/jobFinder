//Chamando o sequilize
const Sequilize = require('sequielize');
// indicando o arquivo de conexao com o banco
const db = require('../db/connection');
const sequelize = require('../db/connection');


//  Criando o model com metodo define do sequilize
const job = db.define('job', {
    title: {
        type: Sequilize.STRING,
    },
    salary: {
        type: Sequelize.STRING,
    },
    company: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    new_job: {
        type: Sequelize.INTERGER,
    },

});

module.exports = Job