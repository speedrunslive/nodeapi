/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var constants = require('./constants');

module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define('Player', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    permissions: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    twitter: {
      allowNull: false,
      type: DataTypes.STRING(25)
    },
    youtube: {
      allowNull: false,
      type: DataTypes.STRING
    },
    country: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    last_seen: {
      allowNull: false,
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    created_at: {
      allowNull: false,
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      allowNull: false,
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal(
        'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    }
  }, {
    instanceMethods: {
      toJSON: function() {
        var values = Object.assign({}, this.get());
        delete values.permissions;
        return values;
      }
    },
    classMethods: {
      associate: function(models) {
        Player.hasOne(models.Stream, {
          foreign_key: {
            allowNull: false,
            name: 'player_id',
          },
          as: 'stream',
          onDelete: 'CASCADE'
        });
      }
    },
    underscored: true
  });
  return Player;
};
