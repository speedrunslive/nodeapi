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
        type: sequelize.STRING
      },
      permissions: {
        allowNull: false,
        type: sequelize.INTEGER,
        defaultValue: 0
      },
      twitter: {
        allowNull: false,
        type: sequelize.STRING
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
        type: sequelize.DATE,
        defaultValue: sequelize.fn('NOW')
      },
      created_at: {
        allowNull: false,
        type: sequelize.DATE,
        defaultValue: sequelize.fn('NOW')
      },
      updated_at: {
        allowNull: false,
        type: sequelize.DATE,
        defaultValue: sequelize.fn('NOW'),
        onUpdate: sequelize.fn('NOW')
      }
    });
  },
  down: function(queryInterface, sequelize) {
    return queryInterface.dropTable('Players');
  }
};
