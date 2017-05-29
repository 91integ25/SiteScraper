var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var exphbs = require("express-handlebars");
var apiRoutes = require("./routes/apiRoutes");
var routes = require("./routes/htmlRoutes");

app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars");
    app.use(express.static(process.cwd() + "/public"));

app.use("/",routes)
app.listen(PORT,function(){
	console.log("listening on PORT: " + PORT)
});
