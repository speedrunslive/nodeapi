/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var models = require('../../models');
var errors = require('restify-errors');

function getGames(req, res, next) {
  models.Game.findAll({
    include: [{
      model: models.LegacyGameRanking,
      as: 'ranking',
      attributes: ['popularityrank', 'popularity']
    }],
    attributes: {
      exclude: ['info']
    },
    order: 'popularity DESC'
  }).then(function(games) {
    // TODO: add popularity and rank to games
    res.send({
      count: games.length.toString(),
      games: games
    });
  });
}

function registerRoutes(server) {
  server.get({
    path: '/games',
    version: '1.0.0 '
  }, getGames);
}

module.exports = registerRoutes;
