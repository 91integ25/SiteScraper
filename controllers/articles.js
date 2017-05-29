var request = require("request");
var cheerio = require("cheerio");
var article = []
module.exports = {
	getHtml:function(cb){
		request("https://www.nytimes.com",function(err,res,html){
			$ = cheerio.load(html);
			$("h2.story-heading").each(function(i,element){
				var headline = $(element).children().text().trim();
				var summary = $(element).next(".summary");

			article.push({
				headline:headline,
				summary:summary
			})
			cb(article);

			});
			
		})
	}
}