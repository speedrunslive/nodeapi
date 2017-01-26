/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

console.log(__dirname);
var constants = require('../src/models/constants');

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      accountType: {
        allowNull: false,
        type: Sequelize.ENUM(constants.ACCOUNT_TYPE_ARRAY),
        defaultValue: 'Player'
      },
      twitter: {
        allowNull: false,
        type: Sequelize.STRING
      },
      youtube: {
        allowNull: false,
        type: Sequelize.STRING
      },
      country: {
        allowNull: false,
        type: Sequelize.ENUM(constants.COUNTRIES_ARRAY),
        defaultValue: 'None'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Players');
  }
};
