'use strict';
module.exports = (sequelize, DataTypes) => {
  const Building = sequelize.define('Building', {
    building_number: DataTypes.INTEGER,
    owner_name: DataTypes.STRING,
    contact: DataTypes.STRING,
    use: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    lng: DataTypes.DOUBLE,
    status: DataTypes.STRING,
    sub_zone_id: DataTypes.INTEGER
  }, {});
  Building.associate = function(models) {
    // associations can be defined here
  };
  return Building;
};