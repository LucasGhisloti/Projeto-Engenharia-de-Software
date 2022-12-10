const Cliente = require('../models/Cliente')
const Solicitacao = require('../models/Solicitacao')
const Transacao = require('../models/Transacao')
const Serasa = require('../models/Serasa')


exports.get = async(req, res, next)=>{

    Cliente.bulkCreate([
        {id:1, nome: 'Bruno Camerin Santarem', data_nascimento: '2000-01-21', credito_pre_aprovado: 2000 },
        {id:2, nome: 'Flavia dos Santos', data_nascimento: '1980-01-13', credito_pre_aprovado: 1000 },
        {id:3, nome: 'Fillipe Martins de Moraes', data_nascimento: '1999-05-10', credito_pre_aprovado: 5000 },
        {id:4, nome: 'Lucas Ghisloti', data_nascimento: '1990-12-24', credito_pre_aprovado: 3000 },
        {id:5, nome: 'Alexandre dos Anjos', data_nascimento: '1995-03-07', credito_pre_aprovado: 1000 },
        {id:6, nome: 'Erick Aceiro', data_nascimento: '2006-06-06', credito_pre_aprovado: 10000 }
    ]).then(() => console.log("Clientes criados"));


    Transacao.bulkCreate([
        {
          id: 10,
          valor: 100,
          data_transacao: "2022-01-21",
          localizacao: "SP",
          tipo_transacao: "D",
          id_usuario: 1
        },
        {
          id: 11,
          valor: 3000,
          data_transacao: "2022-02-21",
          localizacao: "SP",
          tipo_transacao: "C",
          id_usuario: 1
        },
        {
          id: 12,
          valor: 4000,
          data_transacao: "2022-03-21",
          localizacao: "RJ",
          tipo_transacao: "C",
          id_usuario: 1
        },
        {
          id: 13,
          valor: 500,
          data_transacao: "2022-04-21",
          localizacao: "SC",
          tipo_transacao: "D",
          id_usuario: 1
        },
        {
          id: 14,
          valor: 600,
          data_transacao: "2022-04-21",
          localizacao: "SP",
          tipo_transacao: "D",
          id_usuario: 1
        },
        {
          id: 15,
          valor: 2000,
          data_transacao: "2022-06-21",
          localizacao: "SP",
          tipo_transacao: "D",
          id_usuario: 1
        },
        {
          id: 20,
          valor: 100,
          data_transacao: "2021-01-21",
          localizacao: "SP",
          tipo_transacao: "C",
          id_usuario: 2
        },
        {
          id: 21,
          valor: 3000,
          data_transacao: "2021-02-21",
          localizacao: "SP",
          tipo_transacao: "C",
          id_usuario: 2
        },
        {
          id: 22,
          valor: 400,
          data_transacao: "2022-03-21",
          localizacao: "SP",
          tipo_transacao: "D",
          id_usuario: 2
        },
        {
          id: 23,
          valor: 500,
          data_transacao: "2022-04-21",
          localizacao: "SP",
          tipo_transacao: "D",
          id_usuario: 2
        },
        {
          id: 24,
          valor: 600,
          data_transacao: "2022-04-21",
          localizacao: "SP",
          tipo_transacao: "D",
          id_usuario: 2
        },
        {
          id: 25,
          valor: 200,
          data_transacao: "2022-06-21",
          localizacao: "SP",
          tipo_transacao: "D",
          id_usuario: 2
        },
        {
          id: 30,
          valor: 150,
          data_transacao: "2021-09-21",
          localizacao: "RJ",
          tipo_transacao: "C",
          id_usuario: 3
        },
        {
          id: 31,
          valor: 500,
          data_transacao: "2021-12-21",
          localizacao: "RJ",
          tipo_transacao: "C",
          id_usuario: 3
        },
        {
          id: 32,
          valor: 1000,
          data_transacao: "2022-03-21",
          localizacao: "RJ",
          tipo_transacao: "C",
          id_usuario: 3
        },
        {
          id: 33,
          valor: 500,
          data_transacao: "2022-08-21",
          localizacao: "SP",
          tipo_transacao: "D",
          id_usuario: 3
        },
        {
          id: 34,
          valor: 600,
          data_transacao: "2022-08-21",
          localizacao: "SP",
          tipo_transacao: "D",
          id_usuario: 3
        },
        {
          id: 35,
          valor: 200,
          data_transacao: "2022-09-21",
          localizacao: "SP",
          tipo_transacao: "D",
          id_usuario: 3
        },
        {
          id: 40,
          valor: 1500,
          data_transacao: "2021-09-21",
          localizacao: "RJ",
          tipo_transacao: "C",
          id_usuario: 4
        },
        {
          id: 41,
          valor: 500,
          data_transacao: "2021-12-21",
          localizacao: "RJ",
          tipo_transacao: "C",
          id_usuario: 4
        },
        {
          id: 42,
          valor: 1000,
          data_transacao: "2022-03-21",
          localizacao: "RJ",
          tipo_transacao: "C",
          id_usuario: 4
        },
        {
          id: 43,
          valor: 900,
          data_transacao: "2022-08-21",
          localizacao: "SP",
          tipo_transacao: "D",
          id_usuario: 4
        },
        {
          id: 44,
          valor: 800,
          data_transacao: "2022-08-21",
          localizacao: "SP",
          tipo_transacao: "D",
          id_usuario: 4
        },
        {
          id: 45,
          valor: 100,
          data_transacao: "2022-09-21",
          localizacao: "SP",
          tipo_transacao: "D",
          id_usuario: 4
        },
        {
          id: 50,
          valor: 50,
          data_transacao: "2021-09-21",
          localizacao: "RJ",
          tipo_transacao: "C",
          id_usuario: 5
        },
        {
          id: 51,
          valor: 50,
          data_transacao: "2021-12-21",
          localizacao: "RJ",
          tipo_transacao: "C",
          id_usuario: 5
        },
        {
          id: 52,
          valor: 10,
          data_transacao: "2022-03-21",
          localizacao: "RJ",
          tipo_transacao: "C",
          id_usuario: 5
        },
        {
          id: 53,
          valor: 50,
          data_transacao: "2022-08-21",
          localizacao: "SP",
          tipo_transacao: "D",
          id_usuario: 5
        },
        {
          id: 54,
          valor: 60,
          data_transacao: "2022-08-21",
          localizacao: "SP",
          tipo_transacao: "D",
          id_usuario: 5
        },
        {
          id: 55,
          valor: 200,
          data_transacao: "2022-09-21",
          localizacao: "SP",
          tipo_transacao: "D",
          id_usuario: 5
        }
      ]).then(()=> console.log("Transações Criadas"))

      res.send("Dados Criados")
}

// ('10',100,'2022-01-21','SP','D','1'),('11',3000,'2022-02-21','SP','C','1'),('12',4000,'2022-03-21','RJ','C','1'),('13',500,'2022-04-21','SC','D','1'),('14',600,'2022-04-21','SP','D','1'),('15',2000,'2022-06-21','SP','D','1'),('20',100,'2021-01-21','SP','C','2'),('21',3000,'2021-02-21','SP','C','2'),('22',400,'2022-03-21','SP','D','2'),('23',500,'2022-04-21','SP','D','2'),('24',600,'2022-04-21','SP','D','2'),('25',200,'2022-06-21','SP','D','2'),('30',150,'2021-09-21','RJ','C','3'),('31',500,'2021-12-21','RJ','C','3'),('32',1000,'2022-03-21','RJ','C','3'),('33',500,'2022-08-21','SP','D','3'),('34',600,'2022-08-21','SP','D','3'),('35',200,'2022-09-21','SP','D','3'),('40',1500,'2021-09-21','RJ','C','4'),('41',500,'2021-12-21','RJ','C','4'),('42',1000,'2022-03-21','RJ','C','4'),('43',900,'2022-08-21','SP','D','4'),('44',800,'2022-08-21','SP','D','4'),('45',100,'2022-09-21','SP','D','4'),('50',50,'2021-09-21','RJ','C','5'),('51',50,'2021-12-21','RJ','C','5'),('52',10,'2022-03-21','RJ','C','5'),('53',50,'2022-08-21','SP','D','5'),('54',60,'2022-08-21','SP','D','5'),('55',200,'2022-09-21','SP','D','5')