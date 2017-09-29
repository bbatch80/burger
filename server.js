var express = require("express");
var bodyParser = require("body-parser");
var methodOverrride = require("method-override");

var express = require("express");

var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverrride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view-engine", "handlebars");

var routes = require('./controllers/burgers_controller.js');

app.use("/", routes);
app.use("/create", routes);
app.use("/update", routes);

app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
