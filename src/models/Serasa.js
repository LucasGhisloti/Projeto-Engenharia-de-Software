const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/config')
const Cliente = require('./Cliente')
const Solicitacao = require('./Solicitacao')
const Transacao = require('./Transacao')

class Serasa extends Model {}

Serasa.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true 
  },
  status: {
    type: DataTypes.STRING,
  },
  id_usuario :{
    type: DataTypes.STRING,
    reference: {
      model: Cliente,
      key: 'id',
      allowNull: false
    }
  },
  id_solicitacao_credito :{
    type: DataTypes.STRING,
    reference: {
      model: Solicitacao,
      key: 'id',
      allowNull: false
    }
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'consulta_serasa' // We need to choose the model name
});


module.exports = Serasa;