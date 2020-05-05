module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("games", {
      title: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1]
          }
      },
      console: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      price: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
              len: [1]
          }
      },
      wasSold: DataTypes.BOOLEAN
    });
   
    Game.associate = (models) => {
        Game.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Game;
};