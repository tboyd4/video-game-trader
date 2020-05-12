module.exports = function (Sequelize, DataTypes) {
  var User = Sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  User.associate = function (models) {
    // Associating User with their character
    // When a User is deleted, also delete any associated characters
    User.hasMany(models.Game, {
      onDelete: "cascade",
    });
  };

  return User;
};
