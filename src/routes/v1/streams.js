/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var models = require('../../models');
var errors = require('restify-errors');

function findStream(name) {
  return models.Stream.find({
    where: {
      '$player.name$': name
    },
    include: [{
      model: models.Player,
      as: 'player',
      attributes: ['name']
    }],
    attributes: ['id', 'api', 'channel']
  });
}

function streamsGet(req, res, next) {
  if (!req.params.name || req.params.name < 1) {
    res.send(new errors.NotFoundError({
      message: 'name `' + req.params.name + '` cannot be blank'
    }));
    return;
  }

  findStream(req.params.name).then(function(stream) {
    if (!stream) {
      res.send(new errors.NotFoundError({
        message: 'No player with name ' + req.params.name
      }));
    } else {
      res.send(stream.v1JSON());
    }
  });
}

function streamsPost(req, res, next) {
  if (!req.params.name || req.params.name < 1) {
    res.send(new errors.NotFoundError({
      message: '`name` is missing or blank'
    }));
    return;
  } else if (!req.params.channel || req.params.channel < 1) {
    res.send(new errors.NotFoundError({
      message: '`channel` is missing or blank'
    }));
    return;
  }

  findStream(req.params.name).then(function(stream) {
    if (!stream) {
      res.send(new errors.NotFoundError({
        message: 'No player with name ' + req.params.name
      }));
    } else {
      stream.set('channel', req.params.channel);
      stream.save({
        fields: ['channel']
      }).then(function(results) {
        res.send(results.v1JSON());
      }).catch(function(error) {
        res.send(error); // CLEANUP: add real error
      });
    }
  });
}

function registerRoutes(server) {
  server.get({
    path: '/streams/:name',
    version: '1.0.0'
  }, streamsGet);
  server.post({
    path: '/streams/:name',
    version: '1.0.0'
  }, streamsPost);
}

module.exports = registerRoutes;
