/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define('Season', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    short: {
      allowNull: false,
      type: DataTypes.STRING
    },
    started: {
      allowNull: false,
      type: 'TIMESTAMP'
    },
    ended: {
      allowNull: false,
      type: 'TIMESTAMP'
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
