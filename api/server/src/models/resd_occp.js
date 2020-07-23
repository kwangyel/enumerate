'use strict';
module.exports = (sequelize, DataTypes) => {
  const resd_occp = sequelize.define('resd_occp', {
    resd_id: DataTypes.INTEGER,
    armed_force: DataTypes.INTEGER,
    civil: DataTypes.INTEGER,
    farmer: DataTypes.INTEGER,
    H_wife: DataTypes.INTEGER,
    job_seeker: DataTypes.INTEGER,
    monk: DataTypes.INTEGER,
    pvt_emp: DataTypes.INTEGER,
    retiree: DataTypes.INTEGER,
    student: DataTypes.INTEGER,
    others: DataTypes.INTEGER
  }, {});
  resd_occp.associate = function(models) {
    // associations can be defined here
  };
  return resd_occp;
};