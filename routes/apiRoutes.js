var mongoose = require("mongoose"),
	Article = require("../models/article"),
	Comments = require("../models/comment");

mongoose.connect("mongodb://localhost");


module.exports = function(app){
	app.get("/save",function(){

	})
};