/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = {
  up: function(queryInterface, sequelize) {
    return queryInterface.createTable('Races', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER.UNSIGNED
      },
      season_id: {
        allowNull: false,
        references: {
          model: 'Seasons',
          key: 'id',
          name: 'raceSeasonId'
        },
        onUpdate: 'CASCADE',
        type: sequelize.INTEGER.UNSIGNED
      },
      game_id: {
        allowNull: false,
        references: {
          model: 'Games',
          key: 'id',
          name: 'raceGameId'
        },
        onUpdate: 'CASCADE',
        type: sequelize.INTEGER.UNSIGNED
      },
      goal_id: {
        allowNull: false,
        references: {
          model: 'Goals',
          key: 'id',
          name: 'raceGoalId'
        },
        onUpdate: 'CASCADE',
        type: sequelize.INTEGER.UNSIGNED
      },
      date: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: function(queryInterface, sequelize) {
    return queryInterface.dropTable('Races');
  }
};
