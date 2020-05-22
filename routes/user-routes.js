// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("passport");

//

module.exports = function (app) {
  app.post("/login", passport.authenticate("local-signin"), function (
    req,
    res
  ) {
    console.log(req.body);
    console.log("passport Authenticate local signin");
    res.json(req.user);
  });

  app.post("/register", passport.authenticate("local-signup"), function (
    req,
    res
  ) {
    console.log("SIGNUP POST");
    console.log(req.body);
    res.json(req.user);
  });

  //Route to authenticate login
  app.get("/loginauthenticate", function (req, res) {
    if (!req.User) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      let user = db.User.findOne({
        where: { userName: req.body.userName },
        //where: { email: req.body.email },
      });
      if (user === null) {
        console.log("Not found!");
      } else {
        res.json(user);
      }
    }
  });

  app.get("/logout", function (req, res) {
    console.log("back end logged out");
    req.logout();
    res.send("userlogged out");
    req.redirect("/");
  });

  app.get("/Users/:id", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then(function (dbUser) {
        console.log(dbUser);
        res.send(dbUser);
      })
      .catch((err) => res.send(err));
  });

  // to add and remove credits routes

  // will take users id to get into database, and deduct the cart amount
  app.post("/api/removemoney", function (req, res) {
    let userId = req.body.id;
    let cartTotal = req.body.total;

    console.log(req.body);

    db.User.findOne({ attributes: ["centaurs"], where: { id: userId } }).then(
      (results) => {
        let currentMoneys = results.dataValues.centaurs;

        // this will make sure the user has enough money to purchase
        if (currentMoneys > cartTotal) {
          let newMoneys = currentMoneys - cartTotal;

          db.User.update(
            { centaurs: newMoneys },
            {
              where: {
                id: userId,
              },
            }
          ).then(() => {
            res.send('moneypass');
          });
        } else {
          // this will happen if they don't have enough money for the purchase
          res.send('moneyfail')
        }
      }
    );
  });
};
