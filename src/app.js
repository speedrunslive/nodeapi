/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var restify = require('restify');
var passport = require('passport-restify');
var sessions = require('client-sessions');
var formatPrettyJSON = require('./formatters/prettyjson');

var port = process.env.PORT || 3000,
  server = restify.createServer({
    name: 'SpeedRunsLive',
    version: '0.0.0',
    formatters: {
      'application/json': formatPrettyJSON
    }
  });
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.gzipResponse());
server.use(sessions({
  cookieName: 'loginSession',
  requestKey: 'session',
  secret: 'test',
  duration: 7 * 24 * 60 * 60 * 1000, // in milliseconds
  activeDuration: 30 * 60 * 1000, // in milliseconds,
  cookie: {
    domain: process.env.COOKIE_DOMAIN
  }
}));
server.use(passport.initialize());
server.use(passport.session());

server.get({
  path: '/',
  version: ['2.0.0', '1.0.0']
}, function(req, res, next) {
  res.send({
    message: "this should send you to srl.com/dev or something?"
  });
});

require('./auth/oauth')(server);
require('./auth/login')(server);
require('./routes/v1/players')(server);
require('./routes/v1/streams')(server);

server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});
