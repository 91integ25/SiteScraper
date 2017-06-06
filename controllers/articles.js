var request = require("request"),
    cheerio = require("cheerio"),
    article = [];


module.exports = {
	getHtml:function(cb){

		request("https://www.nytimes.com/",function(err,res,html){
			$ = cheerio.load(html);
			var count = 0;
			console.log("requestmade")
			$("h2.story-heading").each(function(i,element){
				var headline = $(element).children().text().trim();
				var link = $(element).children("a").attr("href");
				var summary = $(element).siblings(".summary").text().trim();
				
					if(summary === "" || headline === ""){
						count++;
					}else{

						article.push({
							headline:headline,
							link:link,
							summary:summary
						});
					}

				
			

			});
			cb(article);
			
		})
	}
}