module.exports = function (sequelize, DataTypes) {
  var ToDo = sequelize.define("ToDo", {
   text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return ToDo;
};
