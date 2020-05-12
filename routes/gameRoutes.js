// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/games", function(req, res) {
    db.Game.findAll({})
      .then(function(data) {
        res.json(data);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/games/:id", function(req, res) {
    db.Game.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(data) {
        res.json(data);
      });
  });

  // POST route for saving a new post
  app.post("/api/games", function(req, res) {
    console.log(req.body);
    db.Game.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(data) {
        res.json(data);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/games/:id", function(req, res) {
    db.Game.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(data) {
        res.json(data);
      });
  });

  // PUT route for updating posts
  app.put("/api/games", function(req, res) {
    db.Game.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(data) {
        res.json(data);
      });
  });
};
