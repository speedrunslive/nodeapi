/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  var RaceResult = sequelize.define('RaceResult', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    player_id: {
      allowNull: false,
      references: {
        model: 'Players',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      type: DataTypes.INTEGER.UNSIGNED
    },
    race_id: {
      allowNull: false,
      references: {
        model: 'Races',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      type: DataTypes.INTEGER.UNSIGNED
    },
    place: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED
    },
    time: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED
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
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: function(models) {}
    }
  });
  return RaceResult;
};
