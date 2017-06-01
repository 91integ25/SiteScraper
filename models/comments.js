var mongoose = require("mongoose"),
	schema = mongoose.Schema,
	CommentSchema = new Schema({
		comment:{
			type:String,
			required:true
		}

	});

var Comment = mongoose.model("Comment",CommentSchema);

module.exports = Comment;