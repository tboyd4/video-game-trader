// create user model
// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");

// Creating our User model
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  // automatically hash their password
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  User.associate = function (models) {
    // When a User is deleted, also delete any associated games
    User.hasMany(models.Game, {
      onDelete: "cascade",
    });
  };

  return User;
};

// module.exports = function (sequelize, DataTypes) {
//     var User = sequelize.define("User", {
//       // Giving the User model a name of type STRING
//       name: DataTypes.STRING
//     });

//     User.associate = function(models) {
//       // Associating User with Games
//       // When an User is deleted, also delete any associated Posts
//       User.hasMany(models.Game, {
//         onDelete: "cascade"
//       });
//     };

//     return User;
//   };
