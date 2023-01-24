var express = require("express");
var router = express.Router();
const { sales_controller } = require("../controllers//salesController");

/* GET home page. */
router.route("/").get(sales_controller);

module.exports = router;
