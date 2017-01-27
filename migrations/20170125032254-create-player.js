/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var constants = require('../src/models/constants');

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
      account_type: {
        allowNull: false,
        type: sequelize.ENUM,
        values: constants.ACCOUNT_TYPE_ARRAY,
        defaultValue: 'Player'
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
        type: sequelize.ENUM,
        values: constants.COUNTRY_ARRAY,
        defaultValue: 'None'
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
