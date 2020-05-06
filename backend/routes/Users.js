const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const app = express();

// get all users
app.get("/users", function (req, res) {
  getAllUsers().then((user) => res.json(user));
});
// register route
app.post("/register", function (req, res, next) {
  const { firstname, lastname, email, password } = req.body;
  createUser({ firstname, lastname, email, password }).then((user) =>
    res.json({ user, msg: "account created successfully" })
  );
});

//login route
app.post("/login", async function (req, res, next) {
  const { email, password } = req.body;
  if (email && password) {
    let user = await getUser({ email: email });
    if (!user) {
      res.status(401).json({ message: "No such user found" });
    }
    if (user.password === password) {
      // from now on we'll identify the user by the id and the id is the
      // only personalized value that goes into our token
      let payload = { id: user.id };
      let token = jwt.sign(payload, jwtOptions.secretOrKey);
      res.json({ msg: "founduser", token: token });
    } else {
      res.status(401).json({ msg: "Password is incorrect" });
    }
  }
});

module.exports = User;
