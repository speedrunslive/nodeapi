/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var models = require('../../models');
var errors = require('restify-errors');

function findGame(short) {
  return models.Game.find({
    where: {
      short: short
    },
    include: [{
      model: models.LegacyGameRanking,
      as: 'ranking',
      attributes: ['popularityrank', 'popularity']
    }],
    attributes: {
      exclude: ['info']
    }
  })
}

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
    res.send({
      count: games.length.toString(),
      games: games.map(function stringify(game) {
        return game.toV1JSON();
      })
    });
  });
}

function getGameByName(req, res, next) {
   if (!req.params.short || req.params.short < 1) {
    res.send(new errors.NotFoundError({
      message: '`abbrev` is missing or blank'
    }));
    return;
  } else {
    findGame(req.params.short).then(function(game) {
      if (!game) {
        res.send(new errors.NotFoundError({
          message: 'No game with abbrev ' + req.params.short
        }));
    return;
      } else {
        res.send(game.toV1JSON());
      }
    });
  } 
}

function putGameByName(req, res, next) {
  if (!req.params.short || req.params.short < 1) {
    res.send(new errors.NotFoundError({
      message: '`abbrev` is missing or blank'
    }));
    return;
  } else if (!req.params.name) {
    res.send(new errors.NotFoundError({
      message: '`name` is missing or blank'
    }));
  } else {
    findGame(req.params.short).then(function(game) {
      if (!game) {
        res.send(new errors.NotFoundError({
          message: 'No game with abbrev ' + req.params.short
        }));
      } else {
        game.set('name', req.body.name);
        game.save({
          fields: ['name']
        }).then(function(results) {
          res.send(results.toV1JSON());
        }).catch(function(error) {
          res.send(error); // CLEANUP: add real error
        });
      }
    });
  }
}

function registerRoutes(server) {
  server.get({
    path: '/games',
    version: '1.0.0 '
  }, getGames),
  server.get({
    path: '/games/:short',
    version: '1.0.0 '
  }, getGameByName),
  server.put({
    path: '/games/:short',
    version: '1.0.0 '
  }, putGameByName);
}

module.exports = registerRoutes;
