const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/config')

class Cliente extends Model {}

Cliente.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data_nascimento: {
    type: DataTypes.DATE,       
    allowNull: false
  },
  credito_pre_aprovado: {
    type: DataTypes.FLOAT,              
    allowNull: false
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'cliente' // We need to choose the model name
});

module.exports = Cliente