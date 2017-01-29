/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = {
  up: function(queryInterface, sequelize) {
    return queryInterface.createTable('CurrentRaces', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: sequelize.STRING(5)
      },
      game_id: {
        references: {
          model: 'Games',
          key: 'id',
          name: 'currentRaceGameId'
        },
        onUpdate: 'CASCADE',
        type: sequelize.INTEGER
      },
      goal: {
        allowNull: false,
        type: sequelize.STRING
      },
      time: {
        allowNull: false,
        type: 'TIMESTAMP'
      },
      state: {
        allowNull: false,
        type: 'TINYINT'
      },
      filename: {
        allowNull: false,
        type: sequelize.BOOLEAN
      }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
  },
  down: function(queryInterface, sequelize) {
    return queryInterface.dropTable('CurrentRaces');
  }
};
