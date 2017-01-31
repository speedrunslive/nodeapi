/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var constants = require('../../models/constants');
var models = require('../../models');
var errors = require('restify-errors');

function findPlayer(name) {
  return models.Player.find({
    where: {
      name: name
    },
    include: [{
      model: models.Stream,
      as: 'stream',
      attributes: ['api', 'channel'],
      required: false
    }],
    attributes: {
      exclude: ['permissions', 'last_seen', 'created_at', 'updated_at']
    }
  });
}

function playersGet(req, res, next) {
  if (!req.params.name || req.params.name < 1) {
    res.send(new errors.NotFoundError({
      message: 'name `' + req.params.name + '` cannot be blank'
    }));
    return;
  }

  findPlayer(req.params.name).then(function(player) {
    if (!player) {
      res.send(new errors.NotFoundError({
        message: 'No player with name ' + req.params.name
      }));
    } else {
      res.send(player.v1JSON());
    }
  });
}

function playersPost(req, res, next) {
  if (!req.params.name || req.params.name < 1) {
    res.send(new errors.NotFoundError({
      message: '`name` is missing or blank'
    }));
    return;
  } else if (!req.params.newName || req.params.newName < 1) {
    res.send(new errors.NotFoundError({
      message: '`newName` is missing or blank'
    }));
    return;
  }

  findPlayer(req.params.name).then(function(player) {
    if (!player) {
      res.send(new errors.NotFoundError({
        message: 'No player with name ' + req.params.name
      }));
    } else {
      player.set('name', req.params.newName);
      player.save({
        fields: ['name']
      }).then(function(results) {
        res.send(player.v1JSON());
      }).catch(function(error) {
        res.send(error); // CLEANUP: add real error
      });
    }
  });
}

function registerRoutes(server) {
  server.get({
    path: '/players/:name',
    version: '1.0.0'
  }, playersGet);
  server.put({
    path: '/players/:name',
    version: '1.0.0'
  }, playersPost); // TODO: add auth middleware
}

module.exports = registerRoutes;
