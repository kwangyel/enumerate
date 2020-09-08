'use strict';
module.exports = (sequelize, DataTypes) => {
  const Atm = sequelize.define('Atm', {
    type: DataTypes.STRING,
    building_id: DataTypes.INTEGER
  }, {});
  Atm.associate = function(models) {
    // associations can be defined here
  };
  return Atm;
};