var mongoose = require("mongoose"),
	schema = mongoose.Schema,
	ArticleSchema = new Schema({
		articleName:{
			type:String,
			required:true
		},
		summary:{
			type:String,
			required:true
		},
		comments:{
			type:Schema.Types.ObjectId,
			ref:"Comment"
		}
	});

var Article = mongoose.model("Article",ArticleSchema);

module.exports = Article;