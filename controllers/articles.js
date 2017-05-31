var request = require("request");
var cheerio = require("cheerio");
var article = []

module.exports = {
	getHtml:function(cb){

		request("https://www.washingtonpost.com/",function(err,res,html){
			$ = cheerio.load(html);
			console.log("requestmade")
			$("div.headline").each(function(i,element){
				var headline = $(element).children().text().trim();
				var summary = $(element).next().text();
				
					if(article.length < 6){
						article.push({
							headline:headline,
							summary:summary
						});
					}else{
						console.log("data pushed to route")
						article.length
						cb(article);
					}

				
			

			});
			
		})
	}
}