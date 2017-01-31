/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define('CurrentRace', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING(5)
    },
    game_id: {
      references: {
        model: 'Games',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      type: DataTypes.INTEGER
    },
    goal: {
      allowNull: false,
      type: DataTypes.STRING
    },
    time: {
      allowNull: false,
      type: 'TIMESTAMP'
    },
    state: {
      allowNull: false,
      type: 'TINYINT'
    },
    filename: {
      allowNull: false,
      type: DataTypes.BOOLEAN
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
