'use strict';
module.exports = (sequelize, DataTypes) => {
  const Household = sequelize.define('Household', {
    hh_name: DataTypes.STRING,
    building_id: DataTypes.INTEGER,
    contact: DataTypes.BIGINT,
    male_10: DataTypes.INTEGER,
    female_10: DataTypes.INTEGER,
    male_10_60: DataTypes.INTEGER,
    female_10_60: DataTypes.INTEGER,
    male_60: DataTypes.INTEGER,
    female_60: DataTypes.INTEGER,
    different_abled: DataTypes.STRING,
    unit_id: DataTypes.INTEGER
  }, {});
  Household.associate = function(models) {
    // associations can be defined here
  };
  return Household;
};