'use strict';
module.exports = (sequelize, DataTypes) => {
  const Unit = sequelize.define('Unit', {
    bldg_id: DataTypes.INTEGER,
    occup: DataTypes.STRING,
    level: DataTypes.STRING,
    owm: DataTypes.STRING,
    rent: DataTypes.DOUBLE,
    unit_use: DataTypes.STRING,
    remarks: DataTypes.TEXT
  }, {});
  Unit.associate = function(models) {
    // associations can be defined here
    Unit.belongsTo(models.building,{foreignKey:'bldg_id'});
  };
  return Unit;
};