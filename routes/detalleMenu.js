var express = require('express');
var router = express.Router();
var controller = require("../controllers/mainController")

/* GET home page. */
router.get("/detalleMenu/:id", controller.detalleMenu)

module.exports = router;
