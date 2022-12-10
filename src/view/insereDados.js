const express = require("express");
const router = express.Router();
const InsereDados = require("../database/InsereDados");

router.route("/").get(InsereDados.get);

module.exports = router;