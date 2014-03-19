// Express makes nodeJS easy...almost too easy
var
express = require("express"),
app = express(),
mongo = require("mongodb"), //
monk = require("monk"), //
// db = monk("localhost:28017/hikari"),
db = monk("localhost:27017/hikari"), //
passport = require("passport"),
Sntp = require("sntp"),
LocalStrategy = require("passport-local").Strategy;

app.configure(function () {

	// Fuck that fancy shit, I like good ol' HTML
	app.set("view engine", "html");
	app.engine("html", require("hbs").__express);

	// For serving static files like CSS/JS/IMG
	app.use(express.static(__dirname + "/system"));

});

// Authentication route
app.post("/login", passport.authenticate("local", { successRedirect: "/", failureRedirect: "/login" }));

function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) { return next(); }
	res.redirect("/login");
}

// Super simple authentication
// app.use(express.basicAuth("tadashi", "hikari"));

// Start up hikari!
app.get("/", function(req, res) {
	res.render("index.html");
});

app.get("/login", function(req, res) {
	res.render("login.html");
});

// Run "nodemon app"
// 1343, for ACDC Town. Get it?
app.listen(1343);
console.log("Listening on port 1343");
