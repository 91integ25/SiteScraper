var mongoose = require("mongoose"),
	Article = require("../models/Article"),
	Comments = require("../models/Comment");

mongoose.connect("mongodb://localhost");


module.exports = function(app){
	app.get("/save",function(){

	})
};