const Cliente = require("../models/Cliente");
const Solicitacao = require('../models/Solicitacao')

exports.get = async (req, res, next) => {
    const users = await Cliente.findAll();
    console.log(users)
};
  

exports.solicitacao = async (req, res, next) => {
    const users = await Solicitacao.findAll();
    console.log(users)
    res.send('Solicitacao Recebida')
};

