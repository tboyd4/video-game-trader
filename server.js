// import statements for server.js
const express = require("express");
const favicon = require("express-favicon");
const path = require("path");

// variable declaration
const PORT = process.env.PORT || 8080;
const app = express();
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
var env = require("dotenv");

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.get("/", function (req, res) {
  res.send("Welcome to Passport with Sequelize");
});

// Requiring our models for syncing
const db = require("./backend/models");

// server.js middleware and use methods
app.use(favicon(__dirname + "/client/build/favicon.ico"));

// lines 14 and 15 will be used later in deployment
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, '/client/build')));

// route that servers our production build out
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/public", "index.html"));
});

// Routes
require("./routes/test-api-routes.js")(app);
require("./routes/user-routes")(app);

//load passport strategies
require("../video-game-trader/config/passport");
//require("./config/passport")(passport, models);
//require("./config/passport")(passport, models.user);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
