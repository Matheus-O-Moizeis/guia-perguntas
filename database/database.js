const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root','Senh@123',{
    host:'localhost',
    dialect: 'mysql'
});

module.exports = connection;