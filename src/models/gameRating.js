/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define('GameRating', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    player_id: {
      allowNull: false,
      references: {
        model: 'Players',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      type: DataTypes.INTEGER
    },
    season_id: {
      allowNull: false,
      references: {
        model: 'Seasons',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      type: DataTypes.INTEGER
    },
    game_id: {
      allowNull: false,
      references: {
        model: 'Games',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      type: DataTypes.INTEGER
    },
    rating: {
      allowNull: false,
      type: DataTypes.DOUBLE(12, 9)
    },
    mu: {
      allowNull: false,
      type: DataTypes.DOUBLE(12, 9)
    },
    sigma: {
      allowNull: false,
      type: DataTypes.DOUBLE(12, 9)
    }
  }, {
    classMethods: {
      associate: function(models) {}
    },
    underscored: true
  });
  return Player;
};
