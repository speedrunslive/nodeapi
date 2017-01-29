/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var restify = require('restify'),
  passport = require('passport-restify'),
  sessions = require('client-sessions'),
  formatPrettyJSON = require('./formatters/prettyjson');

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
  cookieName: 'session', // cookie name dictates the key name added to the request object
  secret: 'test', // should be a large unguessable string
  duration: 7 * 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
  activeDuration: 30 * 60 * 1000 // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds
}));
server.use(passport.initialize());
server.use(passport.session());

require('./auth/oauth')(server);
require('./auth/login')(server);
require('./routes/v1/players')(server);
require('./routes/v1/streams')(server);

server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});
