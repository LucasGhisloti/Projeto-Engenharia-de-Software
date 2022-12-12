const Cliente = require("../models/Cliente");
const Solicitacao = require('../models/Solicitacao');
const Transacao = require("../models/Transacao");
const Serasa = require("../models/Serasa");

const utils = require('../utils/utils')

var analisaSolicitacao = async(usuario, solicitacao, transacoes_usuario)=>{
    
    utils.rabbitEnviaStatus(usuario.id, 'verificando condição no Serasa');
    let totalTransacoes = 0;
    let localizacoes = [];
    await new Promise(resolve => setTimeout(resolve, 4000)) // Timeout apenas para melhor visualizaçao da função ASYNC

    transacoes_usuario.map(transacao => {
        // Se não inclui localizacao na lista
        if(!(localizacoes.includes(transacao.localizacao))){
            localizacoes.push(transacao.localizacao);
        }
        totalTransacoes += transacao.valor;
    });

    if(solicitacao.valor > totalTransacoes){
        return false;
    }else{
        // Se não inclui localizacao na lista
        if(!(localizacoes.includes(solicitacao.localizacao))){
            return false;
        }
        return true;
    }
}

exports.get = async (req, res, next) => {
    const users = await Serasa.findAll();
    console.log(users)
};
  

exports.analise = async(req, res, next) =>{
    
    let cliente = req.body.cliente;
    let solicitacao = req.body.solicitacao;
    let transacoes_usuario = req.body.transacoes;
    let callback = req.body.callback;
    let solicitacao_serasa = req.body.solicitacao_serasa;

    let resultado_analise_serasa = await analisaSolicitacao(cliente, solicitacao, transacoes_usuario);
    
    if(resultado_analise_serasa){
        await Solicitacao.update({status : "Aprovado"}, {where : {id : solicitacao.id}})
        await Serasa.update({status : "Aprovado"}, {where : {id : solicitacao_serasa.id}})
    }else{
        await Solicitacao.update({status : "Negado"}, {where : {id : solicitacao.id}})
        await Serasa.update({status : "Negado"}, {where : {id : solicitacao_serasa.id}})
    }

    utils.enviaRespostaCallback({cliente: cliente, solicitacao: solicitacao, resultado: resultado_analise_serasa}, callback)
    res.send(resultado_analise_serasa)
};

