/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var models = require('../../models'),
  errors = require('restify-errors');

function streamsGet(req, res, next) {
  models.Stream.find({
    where: {
      '$player.name$': req.params.name
    },
    include: [{
      model: models.Player,
      as: 'player',
      attributes: ['name']
    }],
    attributes: ['api', 'channel']
  }).then(function(stream) {
    if (!stream) {
      res.send(new errors.NotFoundError({
        message: 'No player with name ' + req.params.name
      }));
    } else {
      var formatted = stream.toJSON();
      formatted.api = formatted.api.toLowerCase();
      formatted.name = formatted.player.name;
      delete formatted.player;
      res.send(formatted);
    }
  });
}

function registerRoutes(server) {
  server.get({
    path: '/streams/:name',
    version: '1.0.0'
  }, streamsGet);
}

module.exports = registerRoutes;
