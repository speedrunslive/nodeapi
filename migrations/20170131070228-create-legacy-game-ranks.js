/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = {
  up: function(queryInterface, sequelize) {
    return queryInterface.createTable('LegacyGameRankings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER.UNSIGNED
      },
      game_id: {
        allowNull: false,
        unique: true,
        references: {
          model: 'Games',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: sequelize.INTEGER.UNSIGNED
      },
      popularityrank: {
        allowNull: false,
        type: sequelize.INTEGER.UNSIGNED
      },
      popularity: {
        allowNull: false,
        type: sequelize.DECIMAL(12, 6)
      }
    });
  },
  down: function(queryInterface, sequelize) {
    return queryInterface.dropTable('LegacyGameRankings');
  }
};
