'use strict';
module.exports = (sequelize, DataTypes) => {
  const Unit = sequelize.define('Unit', {
    unit_name: DataTypes.STRING,
    use: DataTypes.STRING,
    building_id: DataTypes.INTEGER
  }, {});
  Unit.associate = function(models) {
    // associations can be defined here
  };
  return Unit;
};