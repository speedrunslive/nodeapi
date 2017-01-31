/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  var LegacyGameRank = sequelize.define('LegacyGameRank', {
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
        key: 'id',
        name: 'gameRankingGameId'
      },
      onUpdate: 'CASCADE',
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
      associate: function(models) {}
    }
  });
  return LegacyGameRank;
};
