var express = require("express");
var router = express.Router();
var article = require("../controllers/articles");

router.get("/",function(req,res){
		article.getHtml(function(value){
			console.log(value);
		})
	res.render("homepage");
})
module.exports = router;