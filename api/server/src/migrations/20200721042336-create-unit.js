'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Units', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bldg_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'buildings',
          key: 'bldg_id',
          as: 'bldg_id'
        }
      },
      occup: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.STRING
      },
      owm: {
        type: Sequelize.STRING
      },
      rent: {
        type: Sequelize.DOUBLE
      },
      unit_use: {
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
    return queryInterface.dropTable('Units');
  }
};