// import statements for server.js
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const env = require("dotenv");
const favicon = require("express-favicon");
const path = require("path");

// constiable declaration
const PORT = process.env.PORT || 8080;
// Requiring our models for syncing
const db = require("./models");
const app = express();

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// server.js middleware and use methods
app.use(favicon(__dirname + "/client/build/favicon.ico"));

// lines 14 and 15 will be used later in deployment
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "/client/build")));

// Add routes
require("./routes/gameRoutes")(app);
require("./routes/user-routes")(app);

// route that servers our production build out
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
