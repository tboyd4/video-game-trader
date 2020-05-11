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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true
    }
  });

  Game.associate = (models) => {
    Game.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
  }
   
    // Game.associate = (models) => {
    //     Game.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

  return Game;
}

