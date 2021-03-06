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

function getStreamByName(req, res, next) {
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
      res.send(stream.toV1JSON());
    }
  });
}

function putStreamByName(req, res, next) {
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
        res.send(results.toV1JSON());
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
  }, getStreamByName);
  server.put({
    path: '/streams/:name',
    version: '1.0.0'
  }, putStreamByName); // TODO: add auth middleware
}

module.exports = registerRoutes;
