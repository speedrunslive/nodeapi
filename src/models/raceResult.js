/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define('RaceResult', {
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
    race_id: {
      allowNull: false,
      references: {
        model: 'Races',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      type: DataTypes.INTEGER
    },
    place: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    time: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    comment: {
      allowNull: false,
      type: DataTypes.STRING(140)
    },
    old_rating: {
      allowNull: false,
      type: DataTypes.DOUBLE(12, 9)
    },
    old_mu: {
      allowNull: false,
      type: DataTypes.DOUBLE(12, 9)
    },
    old_sigma: {
      allowNull: false,
      type: DataTypes.DOUBLE(12, 9)
    },
    new_rating: {
      allowNull: false,
      type: DataTypes.DOUBLE(12, 9)
    },
    new_mu: {
      allowNull: false,
      type: DataTypes.DOUBLE(12, 9)
    },
    new_sigma: {
      allowNull: false,
      type: DataTypes.DOUBLE(12, 9)
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    classMethods: {
      associate: function(models) {}
    },
    underscored: true
  });
  return Player;
};
