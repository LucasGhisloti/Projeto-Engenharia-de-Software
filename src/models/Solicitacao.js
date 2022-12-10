const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/config')
const Cliente = require('./Cliente')
class Solicitacao extends Model {}

Solicitacao.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true 
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  data_solicitacao: {
    type: DataTypes.DATE,       
    allowNull: false,
    defaultValue: DataTypes.NOW 
  },
  localizacao: {
    type: DataTypes.STRING,              
    allowNull: false
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
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'solicitacao_credito' // We need to choose the model name
});
module.exports = Solicitacao