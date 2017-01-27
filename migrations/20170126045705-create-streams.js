/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var constants = require('../src/models/constants');

module.exports = {
  up: function(queryInterface, sequelize) {
    return queryInterface.createTable('Streams', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: sequelize.INTEGER
        },
        player_id: {
          allowNull: false,
          references: {
            model: 'Players',
            key: 'id',
            name: 'streamPlayerId'
          },
          unique: true,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          type: sequelize.INTEGER
        },
        channel: {
          allowNull: false,
          type: sequelize.STRING
        },
        api: {
          allowNull: false,
          type: sequelize.ENUM,
          values: constants.STREAM_API_ARRAY
        },
        whitelisted: {
          allowNull: false,
          type: sequelize.BOOLEAN,
          defaultValue: false
        },
        blacklisted: {
          allowNull: false,
          type: sequelize.BOOLEAN,
          defaultValue: false
        },
        visibility: {
          allowNull: false,
          type: sequelize.INTEGER,
          defaultValue: 0
        },
        warnings: {
          allowNull: false,
          type: sequelize.INTEGER,
          defaultValue: 0
        },
        last_warning: {
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
          onUpdate: sequelize.fn('NOW'),
          defaultValue: sequelize.fn('NOW')
        }
      })
      .then(function() {
        return queryInterface.sequelize.query(
          'ALTER TABLE `Streams` ADD UNIQUE `stream`(`api`, `channel`)'
        );
      });
  },
  down: function(queryInterface, sequelize) {
    return queryInterface.dropTable('Streams');
  }
};
