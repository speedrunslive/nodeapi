/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = {
  up: function(queryInterface, sequelize) {
    return queryInterface.bulkInsert('Players', [{
      name: 'sushi',
      account_type: 'Player',
      twitter: 'sushi',
      country: 'None',
    }, {
      name: 'Sluip',
      account_type: 'Admin',
      twitter: 'Sluip',
      youtube: '',
      country: 'None',
    }, {
      name: 'Jiano',
      account_type: 'Admin',
      twitter: 'Jiano',
      youtube: 'SunJiano',
      country: 'United States of America',
    }], {});
  },
  down: function(queryInterface, sequelize) {
    return queryInterface.bulkDelete('Players', null, {});
  }
};
