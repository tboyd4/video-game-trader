// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

//
module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error

  app.post("/register", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });
  //
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/register", function (req, res) {
    console.log("SIGNUP POST");
    db.User.create(req.body)
      .then(function () {
        res.redirect(307, "/login");
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/login", function (req, res) {
    if (!req.User) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      let user = db.User.findOne({ where: { email: req.email } });
      if (user === null) {
        console.log("Not found!");
      } else {
        res.json(user);
      }
    }
  });
};
