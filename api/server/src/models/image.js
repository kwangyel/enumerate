'use strict';
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('image', {
    bldg_id: DataTypes.INTEGER,
    src: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  image.associate = function(models) {
    // associations can be defined here
  };
  return image;
};