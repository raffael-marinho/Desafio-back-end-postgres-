const Sequelize = require("sequelize");
const configDB = require("../config/database");
const { User, Task } = require('../models');

const connection = new Sequelize(configDB);

User.init(connection);
Task.init(connection);

User.associate(connection.models);
Task.associate(connection.models);

connection.sync({ alter: true })
    .then(() => {
        console.log("Tabela sincronizada com sucesso!");
    })
    .catch((error) => {
        console.error("Erro ao sincronizar as tabelas: ", error);
    });

module.exports = connection;
