
// Requiring our Games model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the games
  app.get("/api/games", function(req, res) {
      console.log("find all")
    db.Game.findAll({})
      .then(function(data) {
        res.json(data);
      });
  });

  // Get route for retrieving a single game
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

  // POST route for saving a new game
  app.post("/api/games", function(req, res) {
    console.log(req.body);
    db.Game.create({
      title: req.body.title,
      console: req.body.body,
      price: req.body.price,
      year: req.body.year,
      description: req.body.description,
      image: req.body.image

    })
      .then(function(data) {
        res.json(data);
      });
  });

  // DELETE route for deleting games
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

  // PUT route for updating games
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
