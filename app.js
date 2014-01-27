// Express makes nodeJS easy...almost too easy
var express = require("express");
var app = express();

// Fuck that fancy shit, I like good ol' HTML
app.set("view engine", "html");
app.engine("html", require("hbs").__express);

// Start up hikari!
app.get("/", function(req, res) {
	res.render("index.html");
});

// For serving static files like CSS/JS/IMG
app.use(express.static(__dirname + "/system"));

// 1343, for ACDC Town. Get it?
app.listen(1343);
console.log("Listening on port 1343");
