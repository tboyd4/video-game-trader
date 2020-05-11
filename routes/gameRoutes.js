// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");


// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the games
  app.get("/api/games", function (req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Game
    db.Game.findAll({
      where: query,
      include: [db.User]
    }).then(function (dbGame) {
      res.json(dbGame);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/games/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function (data) {
      res.json(data);
    });
  });

  // POST route for saving a new game
  app.post("/api/games", function (req, res) {
    db.Game.create(req.body).then(function (data) {
      res.json(data);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/games/:id", function (req, res) {
    db.Game.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.json(data);
    });
  });

  // PUT route for updating posts
  app.put("/api/games", function (req, res) {
    db.Game.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (data) {
        res.json(data);
      });
  });
};
