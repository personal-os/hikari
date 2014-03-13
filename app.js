// Express makes nodeJS easy...almost too easy
var
express = require("express"),
app = express(),
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

/*
// Authentication configuration
var passport = require("passport"), LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(
	function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {

      if (err) { return done(err); }

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }

      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password" });
      }

      return done(null, user);

    });
  }
));

// Authentication route
app.post("/login", passport.authenticate("local", { successRedirect: "/", failureRedirect: "/login" }));
*/

// Start up hikari!
app.get("/login", function(req, res) {
	res.render("login.html");
});

app.get("/", function(req, res) {
	res.render("index.html");
});

/*
app.get("/login", function (req, res) {
	res.render("login.html", {
		title: "Login",
		user: req.user,
		message: req.flash("error")
	});
});

app.post("/login", passport.authenticate("local", {
	successRedirect: "/worked",
	failureRedirect: "/login",
	failureFlash: true
}));

function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) { return next(); }
	res.redirect("/login");
}
*/

// Run "nodemon app"
// 1343, for ACDC Town. Get it?
app.listen(1343);
console.log("Listening on port 1343");
