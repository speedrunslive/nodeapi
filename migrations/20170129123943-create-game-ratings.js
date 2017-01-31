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
        type: sequelize.INTEGER.UNSIGNED
      },
      player_id: {
        allowNull: false,
        references: {
          model: 'Players',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        type: sequelize.INTEGER.UNSIGNED
      },
      season_id: {
        allowNull: false,
        references: {
          model: 'Seasons',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        type: sequelize.INTEGER.UNSIGNED
      },
      game_id: {
        allowNull: false,
        references: {
          model: 'Games',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        type: sequelize.INTEGER.UNSIGNED
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
