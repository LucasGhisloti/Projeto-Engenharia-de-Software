const amqp = require("amqplib");

exports.enviaRespostaCallback = async(resposta, callback)=>{
    try{
        let cliente = resposta.cliente.nome;
        let solicitacao_valor = resposta.solicitacao.valor;
        let status = resposta.resultado;
        this.rabbitEnviaStatus(cliente, 'análise finalizada');
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

exports.rabbitEnviaStatus = async (usuario, status) => {
    amqp.connect('amqp://localhost')
    .then(function(conn) {
        console.log('RabbitMQ: Conectado');
        return conn.createChannel();
    })
    .then(function(ch) {
        console.log('RabbitMQ: Canal de comunicação Criado.');
        ch.sendToQueue('StatusConsultas', new Buffer.from('Analise de Credito para '+usuario+': '+status));
        console.log('RabbitMQ: Status Enviado');   
    });
};