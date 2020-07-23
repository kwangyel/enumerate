'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('buildings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bldg_id: {
        type: Sequelize.INTEGER,
        unique: true
      },
      name_bldg: {
        type: Sequelize.STRING
      },
      name_bldg: {
        type: Sequelize.STRING
      },
      thram: {
        type: Sequelize.STRING
      },
      owner: {
        type: Sequelize.STRING
      },
      plot_no: {
        type: Sequelize.STRING
      },
      year_const: {
        type: Sequelize.STRING
      },
      year_renov: {
        type: Sequelize.STRING
      },
      floors: {
        type: Sequelize.STRING
      },
      attic: {
        type: Sequelize.STRING
      },
      basement: {
        type: Sequelize.STRING
      },
      exist_status: {
        type: Sequelize.STRING
      },
      asso_pos: {
        type: Sequelize.STRING
      },
      facade: {
        type: Sequelize.STRING
      },
      str_type: {
        type: Sequelize.STRING
      },
      mt_type: {
        type: Sequelize.STRING
      },
      roof_mt: {
        type: Sequelize.STRING
      },
      roof_type: {
        type: Sequelize.STRING
      },
      eme_exit: {
        type: Sequelize.STRING
      },
      lift: {
        type: Sequelize.STRING
      },
      sewer: {
        type: Sequelize.STRING
      },
      waste: {
        type: Sequelize.STRING
      },
      waste_coll: {
        type: Sequelize.STRING
      },
      water: {
        type: Sequelize.STRING
      },
      bldg_use: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('buildings');
  }
};