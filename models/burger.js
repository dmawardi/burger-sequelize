module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("burger", {
      // Giving the Author model a name of type STRING
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [1, 140],
                message: "Must have length greater than 1"
            }
        }},
      devoured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    }
    });
  
    return burger;
  };