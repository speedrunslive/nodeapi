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
      type: DataTypes.INTEGER.UNSIGNED
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    permissions: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
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
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 1
    },
    last_seen: {
      allowNull: false,
      type: 'TIMESTAMP'
    },
    created_at: {
      allowNull: false,
      type: 'TIMESTAMP'
    },
    updated_at: {
      allowNull: false,
      type: 'TIMESTAMP'
    }
  }, {
    underscored: true,
    timestamps: false,
    instanceMethods: {
      toJSON: function() {
        var values = Object.assign({}, this.get());
        if (!values.stream) {
          values.api = '';
          values.channel = '';
        } else {
          values.api = this.stream.api.toLowerCase();
          values.channel = this.stream.channel;
        }
        values.country = constants.COUNTRY.get(values.country);
        delete values.permissions;
        delete values.stream;
        return values;
      }
    },
    classMethods: {
      associate: function(models) {
        Player.hasOne(models.Stream, {
          foreign_key: {
            allowNull: false,
            name: 'player_id'
          },
          as: 'stream',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Player;
};
