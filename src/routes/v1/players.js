'use strict';

var models = require('../../models');
var errors = require('restify-errors');

module.exports = function(server) {
  server.get({
    path: '/players/:name',
    version: '1.0.0'
  }, function(req, res, next) {
    models.Player.find({
      where: {
        name: req.params.name
      },
      attributes: {
        exclude: ['accountType', 'createdAt', 'updatedAt']
      }
    }).then(function(player) {
      if (!player) {
        res.send(new errors.NotFoundError({
          message: 'No player with name ' + req.params.name
        }));
      } else {
        res.send(player);
      }
    });
  });
};
