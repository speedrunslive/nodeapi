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
        api: {
          allowNull: false,
          type: sequelize.ENUM,
          values: constants.STREAM_APIS
        },
        channel: {
          allowNull: false,
          type: sequelize.STRING(50)
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
          type: 'TINYINT',
          defaultValue: 2
        },
        warnings: {
          allowNull: false,
          type: sequelize.INTEGER,
          defaultValue: 0
        },
        last_warning: {
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
      }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
      })
      .then(function() {
        return queryInterface.sequelize.query(
          'ALTER TABLE `Streams` ADD UNIQUE `stream`(`api`, `channel`);'
        );
      });
  },
  down: function(queryInterface, sequelize) {
    return queryInterface.dropTable('Streams');
  }
};
