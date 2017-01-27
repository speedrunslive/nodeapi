/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = {
  up: function(queryInterface, sequelize) {
    return queryInterface.bulkInsert('Streams', [{
      player_id: 1,
      channel: 'sushi',
      api: 'twitch'
    }, {
      player_id: 2,
      channel: 'Sluip',
      api: 'twitch'
    }, {
      player_id: 3,
      channel: 'SunJiano',
      api: 'twitch'
    }], {});
  },
  down: function(queryInterface, sequelize) {
    return queryInterface.bulkDelete('Streams', null, {});
  }
};
