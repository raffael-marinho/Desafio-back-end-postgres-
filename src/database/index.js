const Sequelize = require("sequelize");
const configDB = require("../config/database");
const User = require('../models/User');

const connection = new Sequelize(configDB);

User.init(connection);

connection.sync({ alter: true })
    .then(() => {
        console.log("Tabela sincronizada com sucesso!");
    })
    .catch((error) => {
        console.error("Erro ao sincronizar as tabelas: ", error);
    });

module.exports = connection;
