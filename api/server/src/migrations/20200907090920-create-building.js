'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Buildings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      building_name: {
        type: Sequelize.STRING
      },
      building_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      owner_name: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.BIGINT
      },
      use: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.DOUBLE
      },
      lng: {
        type: Sequelize.DOUBLE
      },
      status: {
        type: Sequelize.STRING
      },
      sub_zone_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Buildings');
  }
};