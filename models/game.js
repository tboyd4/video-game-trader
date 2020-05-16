module.exports = function (sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    console: {
      type: DataTypes.STRING,
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    year: {
      type: DataTypes.INTEGER,
    },

    image: {
      type: DataTypes.STRING,
    },

    // user_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   foreignKey: true
    // },

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },

    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  });

  // Game.associate = (models) => {
  //   Game.belongsTo(models.User, {
  //     foreignKey: 'user_id'
  //   });
  // }
   
    // Game.associate = (models) => {
    //     Game.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

  return Game;
};
