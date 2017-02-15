/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var errors = require('restify-errors');
var validator = require('validator');
var models = require('../../models');

function getGames(req, res, next) {
  models.Game.findAndCountAll({
    include: [{
      model: models.LegacyGameRanking,
      as: 'ranking',
      attributes: ['popularity']
    }],
    offset: (req.offset) ? req.offset : 0,
    limit: (req.limit) ? req.limit : 10,
    order: (req.order) ? req.order : 'popularity DESC'
  }).then(function(games) {
    res.send(games);
  });
}

function registerRoutes(server) {
  server.get({
    path: '/games',
    version: '2.0.0 '
  }, function validateGames(req, res, next) {
    if (validator.isInt(req.params.offset + '')) {
      req.offset = parseInt(req.params.offset);
    }
    if (validator.isInt(req.params.limit + '', {
        max: 100
      })) {
      req.limit = parseInt(req.params.limit);
    }
    if (req.params.sort) {
      req.order = req.params.sort;
    } else {
      req.order = 'popularity';
    }
    if (validator.isIn((req.params.order + '').toUpperCase(), ['ASC',
        'DESC'
      ])) {
      req.order += ' ' + req.params.order;
    } else {
      req.order += ' DESC';
    }
    next();
  }, getGames);
}

module.exports = registerRoutes;
