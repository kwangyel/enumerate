'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Households', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hh_name: {
        type: Sequelize.STRING
      },
      cid: {
        type: Sequelize.STRING
      },
      bedroomType:{
        type: Sequelize.STRING
      },
      bhutanese:{
        type: Sequelize.STRING
      },
      nonBhutanese:{
        type: Sequelize.STRING
      },
      building_id:{
        type: Sequelize.INTEGER
      },
      contact: {
        type: Sequelize.BIGINT
      },
      male_10: {
        type: Sequelize.INTEGER
      },
      female_10: {
        type: Sequelize.INTEGER
      },
      male_10_60: {
        type: Sequelize.INTEGER
      },
      female_10_60: {
        type: Sequelize.INTEGER
      },
      male_60: {
        type: Sequelize.INTEGER
      },
      female_60: {
        type: Sequelize.INTEGER
      },
      different_abled: {
        type: Sequelize.STRING
      },
      unit_id: {
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
    return queryInterface.dropTable('Households');
  }
};