var express = require("express");
var burger = require("../models/burger.js");
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();
var burger = require('../models/burger.js');



router.get("/", function(req,res) {
	burger.allBurgers(function(data){
		res.render("index", {data});
	});
});

router.post("/create", function(req,res) {
	burger.createBurger(req.body.burger_name, function(result){
		res.redirect("/");
	});
});

router.post("/devour/:burger", function(req,res){
	burger.devour(req.params.burger, function(result){
		res.redirect("/");
	});
});

module.exports = router;