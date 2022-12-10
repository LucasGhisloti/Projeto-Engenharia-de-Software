const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

app.post('/credito/resposta', (req,res)=>{
    let resultado = req.body.status ? 'Autorizado' : 'Negado';
    let usuario = req.body.cliente;
    let valor = req.body.solicitacao;
    console.log(`Analise de Credito para ${usuario} no valor de R$: ${valor} foi ${resultado}`)
    res.send(`Analise de Credito para ${usuario} no valor de R$: ${valor} foi ${resultado}`)
})


module.exports = app;
