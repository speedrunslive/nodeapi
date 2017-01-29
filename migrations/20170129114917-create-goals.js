/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var constants = require('../src/models/constants');

module.exports = {
  up: function(queryInterface, sequelize) {
    return queryInterface.createTable('Goals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER
      },
      game_id: {
        allowNull: false,
        references: {
          model: 'Games',
          key: 'id',
          name: 'gameGoalId'
        },
        unique: true,
        onUpdate: 'CASCADE',
        type: sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: sequelize.STRING
      }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
  },
  down: function(queryInterface, sequelize) {
    return queryInterface.dropTable('Goals');
  }
};
