/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = {
  up: function(queryInterface, sequelize) {
    return queryInterface.createTable('Players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER
      },
      name: {
        allowNull: false,
        unique: true,
        type: sequelize.STRING(50)
      },
      permissions: {
        allowNull: false,
        type: sequelize.INTEGER,
        defaultValue: 0
      },
      twitter: {
        allowNull: false,
        type: sequelize.STRING(25)
      },
      youtube: {
        allowNull: false,
        type: sequelize.STRING
      },
      country: {
        allowNull: false,
        type: 'TINYINT',
        defaultValue: 1
      },
      last_seen: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      created_at: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal(
          'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },
  down: function(queryInterface, sequelize) {
    return queryInterface.dropTable('Players');
  }
};
