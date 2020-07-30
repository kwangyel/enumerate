'use strict';
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('image', {
    bldg_id: DataTypes.INTEGER,
    src: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  image.associate = function(models) {
    image.belongsTo(models.building,{foreignKey:'bldg_id'})
    // associations can be defined here
  };
  return image;
};