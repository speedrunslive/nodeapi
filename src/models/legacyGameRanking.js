/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  var LegacyGameRanking = sequelize.define('LegacyGameRanking', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    game_id: {
      allowNull: false,
      references: {
        model: 'Games',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      type: DataTypes.INTEGER.UNSIGNED
    },
    popularityrank: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED
    },
    popularity: {
      allowNull: false,
      type: DataTypes.DECIMAL(12, 6)
    }
  }, {
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: function(models) {
        LegacyGameRanking.belongsTo(models.Game, {
          foreign_key: {
            allowNull: false,
            name: 'game_id'
          },
          as: 'game',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return LegacyGameRanking;
};
