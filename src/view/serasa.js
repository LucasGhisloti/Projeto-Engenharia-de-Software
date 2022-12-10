const express = require("express");
const router = express.Router();
const SerasaController = require("../controllers/SerasaController");

router.route("/").get(SerasaController.get);
router.route("/analise").post(SerasaController.analise);

module.exports = router;