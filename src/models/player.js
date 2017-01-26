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
    accountType: {
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
      type: DataTypes.ENUM(constants.COUNTRIES_ARRAY),
      defaultValue: 'None'
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('NOW')
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('NOW')
    }
  }, {
    instanceMethods: {
      toJSON: function() {
        var values = Object.assign({}, this.get());

        delete values.accountType;
        return values;
      }
    },
    classMethods: {
      associate: function(models) {}
    }
  });
  return Player;
};
