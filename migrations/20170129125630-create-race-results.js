/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = {
  up: function(queryInterface, sequelize) {
    return queryInterface.createTable('RaceResults', {
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
          name: 'raceResultPlayerId'
        },
        onUpdate: 'CASCADE',
        type: sequelize.INTEGER
      },
      race_id: {
        allowNull: false,
        references: {
          model: 'Races',
          key: 'id',
          name: 'raceResultRaceId'
        },
        onUpdate: 'CASCADE',
        type: sequelize.INTEGER
      },
      place: {
        allowNull: false,
        type: sequelize.INTEGER
      },
      time: {
        allowNull: false,
        type: sequelize.INTEGER
      },
      comment: {
        allowNull: false,
        type: sequelize.STRING(140)
      },
      old_rating: {
        allowNull: false,
        type: sequelize.DOUBLE(12, 9)
      },
      old_mu: {
        allowNull: false,
        type: sequelize.DOUBLE(12, 9)
      },
      old_sigma: {
        allowNull: false,
        type: sequelize.DOUBLE(12, 9)
      },
      new_rating: {
        allowNull: false,
        type: sequelize.DOUBLE(12, 9)
      },
      new_mu: {
        allowNull: false,
        type: sequelize.DOUBLE(12, 9)
      },
      new_sigma: {
        allowNull: false,
        type: sequelize.DOUBLE(12, 9)
      }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
  },
  down: function(queryInterface, sequelize) {
    return queryInterface.dropTable('RaceResults');
  }
};
