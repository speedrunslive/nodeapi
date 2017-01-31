/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define('Goal', {
    race_id: {
      allowNull: false,
      type: DataTypes.STRING(5)
    },
    player_id: {
      references: {
        model: 'Players',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      type: DataTypes.INTEGER.UNSIGNED
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(50)
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
      type: DataTypes.STRING(140)
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
  return Player;
};
