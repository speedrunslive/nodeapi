/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var errors = require('restify-errors');
var validator = require('validator');
var constants = require('../../models/constants');
var models = require('../../models');

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

function getPlayerByName(req, res, next) {
  findPlayer(req.params.name).then(function(player) {
    if (!player) {
      res.send(new errors.NotFoundError({
        message: 'No player with name ' + req.params.name
      }));
    } else {
      res.send(player.toV1JSON());
    }
  });
}

function putPlayerByName(req, res, next) {
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
        res.send(player.toV1JSON());
      }).catch(function(error) {
        res.send(error); // CLEANUP: add real error
      });
    }
  });
}

function registerRoutes(server) {
  server.get({
    path: '/players/:name',
    version: '1.0.0 '
  }, function validateGetByName(req, res, next) {
    if (!validator.isLength(req.params.name, {
        min: 1,
        max: 50
      })) {
      res.send(new errors.InvalidContentError({
        message: '`name` must have length of 1 to 50'
      }));
      return;
    }
    next();
  }, getPlayerByName);
  server.put({
    path: '/players/:name',
    version: '1.0.0'
  }, function validatePutByName(req, res, next) {
    if (!validator.isLength(req.params.name, {
        min: 1,
        max: 50
      })) {
      res.send(new errors.InvalidContentError({
        message: '`name` must have length of 1 to 50'
      }));
      return;
    }
    if (!validator.isLength(req.params.newName, {
        min: 1,
        max: 50
      })) {
      res.send(new errors.InvalidContentError({
        message: '`newName` must have length of 1 to 50'
      }));
      return;
    }
    next();
  }, putPlayerByName); // TODO: add auth middleware
}

module.exports = registerRoutes;
