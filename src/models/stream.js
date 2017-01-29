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
      type: DataTypes.INTEGER
    },
    player_id: {
      allowNull: false,
      references: {
        model: 'Players',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      type: DataTypes.INTEGER
    },
    api: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.ENUM,
      values: constants.STREAM_APIS
    },
    channel: {
      allowNull: false,
      primaryKey: true,
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
      type: DataTypes.INTEGER,
      defaultValue: 2
    },
    warnings: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    last_warning: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('NOW')
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
    classMethods: {
      associate: function(models) {
        Stream.belongsTo(models.Player, {
          foreign_key: {
            allowNull: false,
            name: 'player_id',
          },
          as: 'player',
          onDelete: 'CASCADE'
        });
      },
      API: constants.STREAM_API
    },
    underscored: true
  });
  return Stream;
};
