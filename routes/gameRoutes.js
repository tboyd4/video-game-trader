const sequelize = require("sequelize");

// Requiring our Games model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  // GET route for getting all of the games
  app.get("/api/games", function (req, res) {
    // if (req.params.search) {
    db.Game.findAll({
      where: {
        title: { [sequelize.Op.like]: `%${req.query.search}%` }, //<==== was req.params.search
      },
    }).then(function (data) {
      res.json(data);
    });
  });
  //   else {
  // db.Game.findAll({})
  //   .then(function(data) {
  //     res.json(data);
  //   });
  // }
  // });

  // Get route for retrieving a single game
  app.get("/api/games/:id", function (req, res) {
    db.Game.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function (data) {
      res.json(data);
    });
  });

  
  // POST route for saving a new game
  app.post("/api/games", function (req, res) {
    console.log(req.body);
    db.Game.create({
      title: req.body.title,
      console: req.body.console,
      price: req.body.price,
      year: req.body.year,
      image: req.body.image,
      UserId: req.body.userid
    })
      .then(function(data) {
        res.json(data);
      });
  });

  // DELETE route for deleting games
  app.delete("/api/games/:id", function (req, res) {
    db.Game.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (data) {
      res.json(data);
    });
  });

  // PUT route for updating games
  app.put("/api/games", function (req, res) {
    db.Game.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then(function (data) {
      res.json(data);
    });
  });
};
