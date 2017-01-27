/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var models = require('../../models');
var errors = require('restify-errors');

function playersGet(req, res, next) {
  models.Player.find({
    where: {
      name: req.params.name
    },
    include: [{
      model: models.Stream,
      as: 'stream',
      attributes: ['api', 'channel'],
      required: false
    }],
    attributes: {
      exclude: ['account_type', 'created_at', 'updated_at']
    }
  }).then(function(player) {
    if (!player) {
      res.send(new errors.NotFoundError({
        message: 'No player with name ' + req.params.name
      }));
    } else {
      var formatted = player.get();
      if (!formatted.stream) {
        formatted.api = '';
        formatted.channel = '';
      } else {
        formatted.api = player.stream.api;
        formatted.channel = player.stream.channel;
      }
      delete formatted.stream;
      res.send(formatted);
    }
  });
}

function registerRoutes(server) {
  server.get({
    path: '/players/:name',
    version: '1.0.0'
  }, playersGet);
}

module.exports = registerRoutes;
