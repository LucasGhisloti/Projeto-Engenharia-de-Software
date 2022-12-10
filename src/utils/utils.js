exports.enviaRespostaCallback = async(resposta, callback)=>{
    try{
        let cliente = resposta.cliente.nome;
        let solicitacao_valor = resposta.solicitacao.valor;
        let status = resposta.resultado;
        await fetch(callback, {
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