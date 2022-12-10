const express = require("express");
const router = express.Router();
const CreditoController = require("../controllers/CreditoController");

router.route("/").get(CreditoController.get);

router.route("/solicitacao").post(CreditoController.solicitacao);
router.route("/analise").post(CreditoController.analise);


module.exports = router;