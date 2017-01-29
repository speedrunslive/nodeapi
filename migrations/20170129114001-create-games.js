/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var constants = require('../src/models/constants');

module.exports = {
  up: function(queryInterface, sequelize) {
    return queryInterface.createTable('Games', {
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
      info: {
        allowNull: false,
        type: sequelize.TEXT
      }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
  },
  down: function(queryInterface, sequelize) {
    return queryInterface.dropTable('Games');
  }
};
