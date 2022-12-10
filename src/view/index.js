// const UserRoute = require('./UserRoute');

module.exports = (app) => {
    app.use("/credito", require("./credito"));
    app.use("/insereDados", require("./insereDados"));
    app.use("/serasa",require("./serasa"))
}