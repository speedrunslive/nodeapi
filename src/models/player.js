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
      type: DataTypes.STRING
    },
    account_type: {
      allowNull: false,
      type: DataTypes.ENUM(constants.ACCOUNT_TYPE_ARRAY),
      defaultValue: 'Player'
    },
    twitter: {
      allowNull: false,
      type: DataTypes.STRING
    },
    youtube: {
      allowNull: false,
      type: DataTypes.STRING
    },
    country: {
      allowNull: false,
      type: DataTypes.ENUM(constants.COUNTRY_ARRAY),
      defaultValue: 'None'
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('NOW')
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
      onUpdate: sequelize.fn('NOW'),
      defaultValue: sequelize.fn('NOW')
    }
  }, {
    instanceMethods: {
      toJSON: function() {
        var values = Object.assign({}, this.get());

        delete values.account_type;
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