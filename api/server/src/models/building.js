'use strict';
module.exports = (sequelize, DataTypes) => {
  const building = sequelize.define('building', {
    bldg_id:DataTypes.INTEGER,
    name_bldg: DataTypes.STRING,
    name_own: DataTypes.STRING,
    thram: DataTypes.STRING,
    owner: DataTypes.STRING,
    plot_no: DataTypes.STRING,
    year_const: DataTypes.STRING,
    year_renov: DataTypes.STRING,
    floors: DataTypes.STRING,
    attic: DataTypes.STRING,
    basement: DataTypes.STRING,
    exist_status: DataTypes.STRING,
    asso_pos: DataTypes.STRING,
    facade: DataTypes.STRING,
    str_type: DataTypes.STRING,
    mt_type: DataTypes.STRING,
    roof_mt: DataTypes.STRING,
    roof_type: DataTypes.STRING,
    eme_exit: DataTypes.STRING,
    lift: DataTypes.STRING,
    sewer: DataTypes.STRING,
    waste: DataTypes.STRING,
    waste_coll: DataTypes.STRING,
    water: DataTypes.STRING,
    bldg_use: DataTypes.STRING
  }, {});
  building.associate = function(models) {
    // associations can be defined here
  };
  return building;
};