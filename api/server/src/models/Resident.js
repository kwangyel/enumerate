'use strict';
module.exports = (sequelize, DataTypes) => {
  const Resident = sequelize.define('Resident', {
    unit_id: DataTypes.INTEGER,
    resd_male: DataTypes.INTEGER,
    resd_female: DataTypes.INTEGER,
    income: DataTypes.DOUBLE,
    diff_abled: DataTypes.DOUBLE,
    mode: DataTypes.STRING,
    mode_pvt: DataTypes.INTEGER,
    parking: DataTypes.STRING,
    pow: DataTypes.STRING,
    land_own: DataTypes.STRING,
    house_own: DataTypes.STRING,
    remarks: DataTypes.TEXT
  }, {});
  Resident.associate = function(models) {
    // associations can be defined here
    Resident.belongsTo(models.Unit,{foreignKey:'unit_id'});
  };
  return Resident;
};