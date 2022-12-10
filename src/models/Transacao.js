const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/config')
const Cliente = require('./Cliente')

class Transacao extends Model {}

Transacao.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  data_transacao: {
    type: DataTypes.DATE,       
    allowNull: false
  },
  localizacao: {
    type: DataTypes.STRING,              
    allowNull: false
  },
  tipo_transacao:{
    type: DataTypes.STRING,              
    allowNull: false
  },
  id_usuario :{
    type: DataTypes.STRING,
    reference: {
      model: Cliente,
      key: 'id',
      allowNull: false
    }
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'transacao' // We need to choose the model name
});

module.exports = Transacao