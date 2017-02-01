/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = {
  up: function(queryInterface, sequelize) {
    return queryInterface.bulkInsert('Games', [{
      id: 1,
      name: 'The Legend of Zelda: Ocarina of Time',
      short: 'oot',
      info: ''
    }, {
      id: 2,
      name: 'Super Mario 64',
      short: 'sm64',
      info: ''
    }, {
      id: 3,
      name: 'Super Mario World',
      short: 'smw',
      info: ''
    }]).then(function() {
      return queryInterface.bulkInsert('LegacyGameRankings', [{
        id: 1,
        game_id: 1,
        popularityrank: 2,
        popularity: 840
      }, {
        id: 2,
        game_id: 2,
        popularityrank: 1,
        popularity: 970
      }, {
        id: 3,
        game_id: 3,
        popularityrank: 3,
        popularity: 500
      }]);
    });
  },
  down: function(queryInterface, sequelize) {
    return queryInterface.bulkDelete('Games', null, {});
  }
};
