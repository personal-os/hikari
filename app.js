// hikari dependencies
var bodyParser = require("body-parser");
var errorHandler = require("errorhandler");
var express = require("express");
var fs = require("fs");
var http = require("http");
var methodOverride = require("method-override");
var logger = require("morgan");
var multer = require("multer");
var passport = require("passport");
var FacebookStrategy = require("passport-facebook").Strategy;
var GitHubStrategy = require("passport-github").Strategy;
var path = require("path");
var routes = require("routes");
var favicon = require("serve-favicon");

var app = express();



// OAuth keys and secrets
eval(fs.readFileSync("./boot/oauth.js") + "");



// Environment setup
app.set("port", process.env.PORT || 1343);
app.set("view engine", "html");

app.engine("html", require("hbs").__express);

app.use(favicon(__dirname + "/system/images/favicon.png"));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "system")));
app.use(multer());

app.set("views", path.join(__dirname, "views"));



// Development only
if ("development" == app.get("env")) {
  // app.use(express.errorHandler());
}



// Authentication with Facebook
passport.use(
  new FacebookStrategy({
    clientID: fbID,
    clientSecret: fbSecret,
    callbackURL: "http://localhost:1343/auth/facebook/callback"
    // profileFields: ["id", "displayName", "photos"]
  },
  function (accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      // should probably disable this and use callbacks...womp, will do later
      fs.writeFile("system/account/facebookProfile.json", JSON.stringify(profile));

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



// Authentication with GitHub
passport.use(
  new GitHubStrategy({
    clientID: githubID,
    clientSecret: githubSecret,
    callbackURL: "http://localhost:1343/auth/github/callback"
  },
  function (accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      // should probably disable this and use callbacks...womp, will do later
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
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});



// Start hikari!
var server = app.listen(app.get("port"), function () {
  console.log("hikari initialized on " + server.address().port);
});