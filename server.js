var express = require('express'),
	logger = require("morgan"),
    app = express(),
    PORT = process.env.PORT || 8080,
    bodyParser = require("body-parser")
    exphbs = require("express-handlebars"),
    apiRoutes = require("./routes/apiRoutes"),
    routes = require("./routes/htmlRoutes");

app.use(logger("dev"));

app.use(bodyParser.urlencoded({
	extended:false
}));

app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars");
app.use(express.static(process.cwd() + "/public"));


// mLab URI: mongodb://heroku_rk99299v:63qijh27bjtpr8c2pbjvqevb9b@ds157631.mlab.com:57631/heroku_rk99299v

app.use("/",routes)
app.listen(PORT,function(){
	console.log("listening on PORT: " + PORT)
});
