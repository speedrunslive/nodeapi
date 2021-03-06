/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define('Game', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    short: {
      allowNull: false,
      type: DataTypes.STRING
    },
    info: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    underscored: true,
    timestamps: false,
    instanceMethods: {
      toJSON: function() {
        var values = Object.assign({}, this.get());
        values.ranking = values.ranking.popularity;
        return values;
      },
      toV1JSON: function() {
        var values = Object.assign({}, this.get());
        values.abbrev = values.short;
        if (values.ranking) {
          values.popularity = values.ranking.popularity;
          values.popularityrank = values.ranking.popularityrank;
          delete values.ranking;
        }
        delete values.short;
        return values;
      }
    },
    classMethods: {
      associate: function(models) {
        Game.hasOne(models.LegacyGameRanking, {
          foreign_key: {
            allowNull: false,
            name: 'game_id'
          },
          as: 'ranking',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Game;
};
