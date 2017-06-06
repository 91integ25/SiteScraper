var mongoose = require("mongoose"),

	Schema = mongoose.Schema,
	
	CommentSchema = new Schema({
		comment:{
			type:String,
			required:true
		}

	});

var Comment = mongoose.model("Comment",CommentSchema);

module.exports = Comment;