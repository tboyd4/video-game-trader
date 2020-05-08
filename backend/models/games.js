module.exports = function (sequelize, DataTypes) {
  var Game = sequelize.define("Game", {

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    console: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    releaseDate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  });

  // Game.associate = (models) => {
  //   Game.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });

  // Game.associate = (models) => {
  //     Game.belongsTo(models.User, {
  //         foreignKey: {
  //             allowNull: false
  //         }
  //     });
  // };

  return Game;
};
