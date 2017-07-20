var express = require("express"),
	bodyParser = require("body-parser"),
	router = express.Router(),
	articleCont = require("../controllers/articles"),
	Article = require("../models/article"),
	Comment = require("../models/comment"),
	mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/sitescraper");

var db = mongoose.connection;

db.on("error",function(erro){
	console.log("Mongoose error: ", err);
});

db.once("open",function(){
	console.log("Mongoose connection successful")
});

router.get("/",function(req,res){

	articleCont.getHtml(function(value){
		console.log(value)
		res.render("article",{article:value});
	});

});


router.post("/save",function(req,res){
	console.log(req.body)
	
var entry = new Article(req.body);
entry.save(function(err,doc){
	if(err){
		console.log(err);
	}else{
		console.log(doc," inserted");
	}

});
res.redirect("/");

});

router.get("/saved",function(req,res){
	Article.find({},function(err,doc){
		if(err){
			console.log(err);
		}
		else{
			console.log(doc);
			res.render("saved",{article:doc});
		}
	});
});

router.post("/comment/:id",function(req,res){
	console.log("comment body",req.body)
	var commentEntry = new Comment(req.body);
	commentEntry.save(function(err,doc){
		if(err){
			console.log(err)
		}else{
			Article.findOneAndUpdate({"_id":req.params.id},{"comment":doc._id})
			.exec(function(err,doc){	
				if(err){
					console.log(err);
				}else{
					res.redirect("/saved");
				}
			});
		}
		
	});
});

router.get("/populated/:id",function(req,res){
	Article.findOne({"_id":req.params.id})
	.populate("comment")
	.exec(function(err,doc){
		console.log(doc,"/populated")
		res.render("populated",{article:doc});
	})
})

module.exports = router;