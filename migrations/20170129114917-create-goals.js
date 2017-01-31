/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = {
  up: function(queryInterface, sequelize) {
    return queryInterface.createTable('Goals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER.UNSIGNED
      },
      game_id: {
        allowNull: false,
        references: {
          model: 'Games',
          key: 'id',
          name: 'goalGameId'
        },
        onUpdate: 'CASCADE',
        type: sequelize.INTEGER.UNSIGNED
      },
      name: {
        allowNull: false,
        type: sequelize.STRING
      }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
  },
  down: function(queryInterface, sequelize) {
    return queryInterface.dropTable('Goals');
  }
};
