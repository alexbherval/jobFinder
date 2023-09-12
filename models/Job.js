// Chamando o Sequelize
const Sequelize = require('sequelize');
// Indicando o arquivo de conexão com o banco
const db = require('../db/connection');

// Criando o modelo com o método define do Sequelize
const Job = db.define('job', {
    title: {
        type: Sequelize.STRING,
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
        type: Sequelize.INTEGER, // Correção: INTEGER deve ser escrito com "I" maiúsculo
    },
    description: {
        type: Sequelize.STRING,
    }
});

module.exports = Job;
