/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var constants = require('../src/models/constants');

module.exports = {
  up: function(queryInterface, sequelize) {
    return queryInterface.createTable('Seasons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: sequelize.STRING
      },
      short: {
        allowNull: false,
        type: sequelize.STRING
      },
      started: {
        allowNull: false,
        type: sequelize.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      ended: {
        allowNull: false,
        type: sequelize.DATE
      }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
  },
  down: function(queryInterface, sequelize) {
    return queryInterface.dropTable('Seasons');
  }
};
