'use strict';
module.exports = (sequelize, DataTypes) => {
  const resd_age = sequelize.define('resd_age', {
    resd_id: DataTypes.INTEGER,
    age_grp: DataTypes.STRING,
    female: DataTypes.INTEGER,
    male: DataTypes.INTEGER
  }, {});
  resd_age.associate = function(models) {
    // associations can be defined here
  };
  return resd_age;
};