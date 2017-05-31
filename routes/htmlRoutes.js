var express = require("express"),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	router = express.Router(),
	article = require("../controllers/articles"),
	ArticleModel = require("../models/article"),
	morgan = require("morgan"),
	Comments = require("../models/comments");

mongoose.connect("mongodb://localhost")

router.get("/",function(req,res){
		article.getHtml(function(value){
			console.log(value);
			console.log(value.length)
		})
	res.render("homepage");
})
module.exports = router;