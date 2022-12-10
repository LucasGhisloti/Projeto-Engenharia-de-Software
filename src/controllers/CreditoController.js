const Cliente = require("../models/Cliente");
const Solicitacao = require('../models/Solicitacao')
const Transacao = require("../models/Transacao")

const utils = require('../utils/utils')

var criaSolicitacao = async(user_id, valor, localizacao)=>{
    try{
        let solicitacao = await Solicitacao.create({id_usuario: user_id, valor: valor, localizacao: localizacao, status : "Em progresso"});
        return {status : 200, message : "Solicitaçao adicionada ao banco", data: solicitacao}
    }catch(err){
        return {status : 400 , message : err, data: null}
    }
}

var iniciaAnalise = async(id_solicitacao, id_usuario, callback_url)=>{
    try{

        let req_data = {id_solicitacao: id_solicitacao, id_usuario: id_usuario, callback_url: callback_url}

        const analise = await fetch('http://localhost:3333/credito/analise', {
            method: 'POST',
            mode : 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req_data)
        });
        return true;
    }catch(err){
        return err;
    }
}


var enviaRespostaCallback = async(resposta, callback)=>{
    try{
        let cliente = resposta.cliente.nome;
        let solicitacao_valor = resposta.solicitacao.valor;
        let status = resposta.resultado;
        const response = await fetch(callback, {
            method: 'POST',
            mode : 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({cliente: cliente, solicitacao: solicitacao_valor, status: status})
        });
        return true
    }catch(err){
        return err;
    }
}

var enviaAnaliseSerasa = async(usuario, solicitacao, transacoes_usuario, callback_url)=>{
    try{

        const response = await fetch('http://localhost:3333/serasa/analise', {
            method: 'POST',
            mode : 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({cliente: usuario, solicitacao: solicitacao, transacoes: transacoes_usuario, callback: callback_url})
        });
        return response
    }catch(err){
        return err;
    }
}


var analisaSolicitacao = async(usuario, solicitacao, transacoes_usuario)=>{

    await new Promise(resolve => setTimeout(resolve, 1500)) // Timeout apenas para melhor visualizaçao da função ASYNC
    
    if(solicitacao.valor <= usuario.credito_pre_aprovado){
        console.log("PRE APROVADO")
        return true;
    }
    return false;
}

exports.get = async (req, res, next) => {
    const users = await Cliente.findAll();
    console.log(users)
    res.send(users)
};

exports.analise = async (req, res, next) => {
    try{
        let data = req.body;
        let cliente = await Cliente.findOne({where: {id: data.id_usuario},raw: true});
        let solicitacao = await Solicitacao.findOne({where: {id: data.id_solicitacao}, raw: true});
        let transacoes_usuario = await Transacao.findAll({where: {id_usuario: data.id_usuario},raw: true});
       
        let resultado_analise = await analisaSolicitacao(cliente, solicitacao, transacoes_usuario);

        if(resultado_analise){
            utils.enviaRespostaCallback({cliente: cliente, solicitacao: solicitacao, resultado: resultado_analise}, data.callback_url)
            // enviaRespostaCallback({cliente: cliente, solicitacao: solicitacao, resultado: resultado_analise}, data.callback_url);
        }else{
            let resultado_analise_serasa = await enviaAnaliseSerasa(cliente, solicitacao, transacoes_usuario, data.callback_url)
            // enviaRespostaCallback({cliente: cliente, solicitacao: solicitacao, resultado: resultado_analise_serasa}, data.callback_url);
        }
        

    }catch(err){

    }

}
  

exports.solicitacao = async (req, res, next) => {
    let data = req.body;

    let user_id = data.user_id;
    let valor = data.valor;
    let localizacao = data.localizacao;
    let callback_url = data.callback

    let solicitacaoCriada = await criaSolicitacao(user_id, valor, localizacao);
    
    if(solicitacaoCriada.status == 200){
        iniciaAnalise(solicitacaoCriada.data.id, user_id, callback_url)
        
        res.send('Solicitacao Recebida, sendo analisada')
    }else{
        
        res.send('Solicitacao não foi processada')
    }
};



