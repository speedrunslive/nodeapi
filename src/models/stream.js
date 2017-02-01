/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var constants = require('./constants');

module.exports = function(sequelize, DataTypes) {
  var Stream = sequelize.define('Stream', {
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
      onDelete: 'CASCADE',
      type: DataTypes.INTEGER.UNSIGNED
    },
    api: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: constants.STREAM_APIS
    },
    channel: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    whitelisted: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    blacklisted: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    visibility: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 2
    },
    warnings: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 0
    },
    last_warning: {
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
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    underscored: true,
    timestamps: false,
    instanceMethods: {
      toJSON: function() {
        var values = Object.assign({}, this.get());
        values.api = values.api.toLowerCase();
        values.name = values.player.name;
        delete values.id;
        delete values.player;
        return values;
      }
    },
    classMethods: {
      associate: function(models) {
        Stream.belongsTo(models.Player, {
          foreign_key: {
            allowNull: false,
            name: 'player_id'
          },
          as: 'player',
          onUpdate: 'CASCADE'
        });
      },
      API: constants.STREAM_API
    }
  });
  return Stream;
};
