// OAuth keys and secrets
var
  require,
  process,
  __dirname,
  fbID,
  fbSecret,
  githubID,
  githubSecret,
  fs = require("fs");

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

// app.use(express.favicon());
app.use(favicon(__dirname + "/system/shell/favicon.png"));

// app.use(express.logger("dev"));
app.use(logger("dev"));

// app.use(express.json());
// app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.methodOverride());
app.use(methodOverride());

app.use(passport.initialize());
app.use(passport.session());

// app.use(express.static(__dirname + "/system"));
app.set("views", path.join(__dirname, "views"));


// app.set('view engine', 'jade');
// app.use(logger('dev'));
// app.use(methodOverride());
/*
app.use(session({ resave: true,
                 saveUninitialized: true,
                 secret: 'uwotm8' }));
*/
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
// app.use(express.static(path.join(__dirname, "public")));

app.get("/", routes.index);
// app.get("/users", user.list);



// Development only
if ("development" == app.get("env")) {
  app.use(express.errorHandler());
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
app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});



// Start hikari!
/*
http.createServer(app).listen(app.get("port"), function () {
  console.log("hikari initialized on " + app.get("port"));
});
*/

var server = app.listen(app.get("port"), function() {
  // debug('Express server listening on port ' + server.address().port);
  console.log("hikari initialized on " + server.address().port);
});