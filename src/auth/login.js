/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var passport = require('passport-restify'),
  LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user.name);
});

passport.deserializeUser(function(id, done) {
  done(null, {
    name: 'test'
  });
});

passport.use(new LocalStrategy({
  usernameField: 'name'
}, function(name, password, done) {
  console.log('login attempt by: %s', name);

  done(null, {
    name: name
  });
}));

function registerRoutes(server) {
  server.get('/login', function(req, res, next) {
    res.send(
      '<form action="/login" method="post"><div><label>email:</label><input type="text"' +
      ' name="email"/><br/></div><div><label>Password:</label><input type="password" name=' +
      '"password"/></div><div><input type="submit" value="Submit"/></div></form><p><small>Hint - ' +
      'bob@secret.com / helloworld</small></p>');
  });

  server.post('/login', passport.authenticate('local', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login'
  }));
}

module.exports = registerRoutes;
