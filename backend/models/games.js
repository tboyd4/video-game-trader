module.exports = function (sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    console: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  Game.associate = (models) => {
    Game.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
<<<<<<< HEAD
   
    // Game.associate = (models) => {
    //     Game.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
=======
  };
>>>>>>> 7bbd005afa92d5d984995566d05da6a9dff185ac

  return Game;
};
