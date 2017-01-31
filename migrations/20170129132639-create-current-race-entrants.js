/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = {
  up: function(queryInterface, sequelize) {
    return queryInterface.createTable('CurrentRaceEntrants', {
      race_id: {
        allowNull: false,
        type: sequelize.STRING(5)
      },
      player_id: {
        references: {
          model: 'Players',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        type: sequelize.INTEGER.UNSIGNED
      },
      name: {
        allowNull: false,
        type: sequelize.STRING(50)
      },
      place: {
        allowNull: false,
        type: sequelize.INTEGER.UNSIGNED
      },
      time: {
        allowNull: false,
        type: sequelize.INTEGER.UNSIGNED
      },
      comment: {
        type: sequelize.STRING(140)
      }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
  },
  down: function(queryInterface, sequelize) {
    return queryInterface.dropTable('CurrentRaceEntrants');
  }
};
