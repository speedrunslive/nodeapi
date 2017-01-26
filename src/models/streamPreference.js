/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var constants = require('./constants');

module.exports = function(sequelize, DataTypes) {
  var StreamPreference = sequelize.define('StreamPreference', {
    setting: DataTypes.ENUM(constants.STREAM_PREFERENCE_ARRAY),
    value: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        StreamPreference.belongsTo(models.Player, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return StreamPreference;
};
