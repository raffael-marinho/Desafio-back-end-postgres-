const Sequelize = require("sequelize");
const configDB = require("../config/database");

const User = require('../models/User')

const connection = new Sequelize(configDB);

Userinit(connection)

module.exports = connection;