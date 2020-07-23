'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('resd_occps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resd_id: {
        type: Sequelize.INTEGER
      },
      armed_force: {
        type: Sequelize.INTEGER
      },
      civil: {
        type: Sequelize.INTEGER
      },
      farmer: {
        type: Sequelize.INTEGER
      },
      H_wife: {
        type: Sequelize.INTEGER
      },
      job_seeker: {
        type: Sequelize.INTEGER
      },
      monk: {
        type: Sequelize.INTEGER
      },
      pvt_emp: {
        type: Sequelize.INTEGER
      },
      retiree: {
        type: Sequelize.INTEGER
      },
      student: {
        type: Sequelize.INTEGER
      },
      others: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('resd_occps');
  }
};