var mongoose = require("mongoose"),

	Schema = mongoose.Schema,
	
	ArticleSchema = new Schema({
		headline:{
			type:String,
			required:true
		},
		summary:{
			type:String,
			required:true
		},
		link:{
			type:String,
			required:true
		},
		saved:{
			type:Boolean,
			default:false
		},
		comment:[{
			type:Schema.Types.ObjectId,
			ref:"Comment"
		}]
});

var Article = mongoose.model("Article",ArticleSchema);

module.exports = Article;