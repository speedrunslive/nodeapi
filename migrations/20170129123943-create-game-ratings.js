/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = {
  up: function(queryInterface, sequelize) {
    return queryInterface.createTable('GameRatings', {
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
          name: 'gameRatingPlayerId'
        },
        onUpdate: 'CASCADE',
        type: sequelize.INTEGER
      },
      season_id: {
        allowNull: false,
        references: {
          model: 'Seasons',
          key: 'id',
          name: 'gameRatingSeasonId'
        },
        onUpdate: 'CASCADE',
        type: sequelize.INTEGER
      },
      game_id: {
        allowNull: false,
        references: {
          model: 'Games',
          key: 'id',
          name: 'gameRatingGameId'
        },
        onUpdate: 'CASCADE',
        type: sequelize.INTEGER
      },
      rating: {
        allowNull: false,
        type: sequelize.DOUBLE(12, 9)
      },
      mu: {
        allowNull: false,
        type: sequelize.DOUBLE(12, 9)
      },
      sigma: {
        allowNull: false,
        type: sequelize.DOUBLE(12, 9)
      }
    });
  },
  down: function(queryInterface, sequelize) {
    return queryInterface.dropTable('GameRatings');
  }
};