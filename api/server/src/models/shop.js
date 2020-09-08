'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define('Shop', {
    unit_name: DataTypes.STRING,
    building_id: DataTypes.INTEGER,
    unit_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    contact: DataTypes.BIGINT
  }, {});
  Shop.associate = function(models) {
    // associations can be defined here
  };
  return Shop;
};