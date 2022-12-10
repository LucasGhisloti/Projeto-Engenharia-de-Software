const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('clientes', 'analise-de-credito', 'unespse2022', {
    host: './cliente.sqlite',
    dialect: 'sqlite'
  });

module.exports = sequelize;

