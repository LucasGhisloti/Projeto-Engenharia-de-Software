const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require('./src/database/config')
const app = express();
const routes = require("./src/view");

sequelize.sync().then(()=>{console.log("Connected")})
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

const port = 3333;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});


// app.post('/test', (req, res)=>{
//   let mensagem = req.query.mensagem
//   console.log(`Ola Mundo ${mensagem}`);
//   res.send(`Ola Mundo ${mensagem}`)
// })
module.exports = app;
