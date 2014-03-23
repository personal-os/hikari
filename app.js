
// OAuth keys and secrets
var fs = require("fs");
eval(fs.readFileSync("./boot/oauth.js") + "");

// hikari dependencies
var express = require("express");
var http = require("http");
var passport = require("passport");
var FacebookStrategy = require("passport-facebook").Strategy;
var GitHubStrategy = require("passport-github").Strategy;

var app = express();

// Environment setup
app.set("port", process.env.PORT || 1343);
app.set("view engine", "html");
app.engine("html", require("hbs").__express);
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + "/system"));

// Development only
if ("development" == app.get("env")) {
  app.use(express.errorHandler());
}

// Authentication with Facebook
passport.use(new FacebookStrategy({
		clientID: fbID,
		clientSecret: fbSecret,
		callbackURL: "http://localhost:1343/auth/facebook/callback"
	},
	function (accessToken, refreshToken, profile, done) {
		process.nextTick(function () {

			console.log(profile);
			return done(null, profile);

		});
	}
));

passport.serializeUser(function (user, done) { done(null, user); });
passport.deserializeUser(function (obj, done) { done(null, obj); });

app.get("/auth/facebook", passport.authenticate("facebook"));
app.get("/auth/facebook/callback", passport.authenticate("facebook", { successRedirect: "/s", failureRedirect: "/" }));

app.get("/", function (req, res) { res.render("login.html"); });
app.get("/s", function (req, res) { res.render("index.html"); });

/*
passport.use(new GitHubStrategy({
    // authentication stuff here, per `passport-github` docs
  },
  function(accessToken, refreshToken, profile, done) {
      // skipping error handling &c for brevity...
      fs.writeFile("githubProfile.json", JSON.stringify(profile));
      return done(null, profile);
    });
  }
));
*/

// Authentication with GitHub
passport.use(new GitHubStrategy({
		clientID: githubID,
		clientSecret: githubSecret,
		callbackURL: "http://localhost:1343/auth/github/callback"
	},
	function (accessToken, refreshToken, profile, done) {
		process.nextTick(function () {

			fs.writeFile("system/account/githubProfile.json", JSON.stringify(profile));

			var userAvatar = profile._json.gravatar_id;
			var userName = profile._json.username;

			console.log(profile);
			return done(null, profile);

		});
	}
));

app.get("/auth/github", passport.authenticate("github"));
app.get("/auth/github/callback", passport.authenticate("github", { successRedirect: "/s", failureRedirect: "/" }));

// Logout
app.get("/logout", function(req, res) {
	req.logout();
	res.redirect("/");
});

// Start hikari!
http.createServer(app).listen(app.get("port"), function () {
  console.log("hikari initialized on " + app.get("port"));
});
