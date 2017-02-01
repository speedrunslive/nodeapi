/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = {
  up: function(queryInterface, sequelize) {
    return queryInterface.bulkInsert('Players', [{
      name: 'sushi',
      permissions: 0,
      twitter: 'sushi',
      country: 1,
    }, {
      name: 'Sluip',
      permissions: 0,
      twitter: 'Sluip',
      youtube: '',
      country: 1,
    }, {
      name: 'Jiano',
      permissions: 0,
      twitter: 'Jiano',
      youtube: 'SunJiano',
      country: 212,
    }]);
  },
  down: function(queryInterface, sequelize) {
    return queryInterface.bulkDelete('Players');
  }
};
