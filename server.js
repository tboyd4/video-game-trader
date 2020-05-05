// import statements for server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

// variable declaration
const PORT = process.env.PORT || 8080;
const app = express();

// Requiring our models for syncing
var db = require("./models");

// server.js middleware and use methods
app.use(favicon(__dirname + '/client/build/favicon.ico'));

// lines 14 and 15 will be used later in deployment
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, '/client/build')));

// route that servers our production build out
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/public', 'index.html'));
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});