'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Residents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      unit_id:{
        type: Sequelize.INTEGER,
        references:{
          model:'units',
          key: 'id',
          as: 'unit_id',
        }
      },
      resd_male: {
        type: Sequelize.INTEGER
      },
      resd_female: {
        type: Sequelize.INTEGER
      },
      income: {
        type: Sequelize.DOUBLE
      },
      diff_abled: {
        type: Sequelize.DOUBLE
      },
      mode: {
        type: Sequelize.STRING
      },
      parking: {
        type: Sequelize.STRING
      },
      pow: {
        type: Sequelize.STRING
      },
      land_own: {
        type: Sequelize.STRING
      },
      house_own: {
        type: Sequelize.STRING
      },
      remarks: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('Residents');
  }
};