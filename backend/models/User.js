const Sequelize = require("sequelize");
//const User = require("../routes/Users");

require("dotenv").config();

// initialize an instance of Sequelize
const sequelize = new Sequelize({
  database: "project3db",
  username: "root",
  password: process.env.MYSQL_PASSWORD,
  dialect: "mysql",
});
// check the databse connection
sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database: ", err));

// create user model
const User = sequelize.define("user", {
  firstname: {
    type: Sequelize.STRING,
  },
  lastname: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
});

// create table with user model
User.sync()
  .then(() => console.log("Oh yeah! User table created successfully"))
  .catch((err) => console.log("Need to check your database credentials"));

// create some helper functions to work on the database
const createUser = async ({ firstname, lastname, email, password }) => {
  return await User.create({ firstname, lastname, email, password });
};
const getAllUsers = async () => {
  return await User.findAll();
};
const getUser = async (obj) => {
  return await User.findOne({
    where: obj,
  });
};

module.exports = User;
