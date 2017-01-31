/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define('Race', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    season_id: {
      allowNull: false,
      references: {
        model: 'Seasons',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      type: DataTypes.INTEGER
    },
    game_id: {
      allowNull: false,
      references: {
        model: 'Games',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      type: DataTypes.INTEGER
    },
    goal_id: {
      allowNull: false,
      references: {
        model: 'Goals',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      type: DataTypes.INTEGER
    },
    date: {
      allowNull: false,
      type: 'TIMESTAMP'
    }
  }, {
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: function(models) {}
    }
  });
  return Player;
};
