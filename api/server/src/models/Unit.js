'use strict';
module.exports = (sequelize, DataTypes) => {
  const Unit = sequelize.define('Unit', {
    occup: DataTypes.STRING,
    level: DataTypes.STRING,
    owm: DataTypes.STRING,
    rent: DataTypes.DOUBLE,
    unit_use: DataTypes.STRING
  }, {});
  Unit.associate = function(models) {
    // associations can be defined here
  };
  return Unit;
};