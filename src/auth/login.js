/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

/*
ALWAYS USE SSL IN PRODUCTION

Auth flow:
  * Go to /oauth/authorize (not logged in)
  * Redirected to /login
  * Store cookie containing user information + session hash to confirm that
  the user's password hasn't been invalidated or changed
  * Redirected back to /oauth/authorize
  * User allows or denies access to application

Sessions will last 30 days + 1 day extension?
*/

var passport = require('passport-restify'),
  LocalStrategy = require('passport-local').Strategy;

// TODO: proper serialization/deserialization
passport.serializeUser(function(user, done) {
  done(null, user.name);
});

passport.deserializeUser(function(id, done) {
  done(null, {
    name: 'test'
  });
});

// TODO: proper user authentication
passport.use(new LocalStrategy({
  usernameField: 'name'
}, function(name, password, done) {
  console.log('login attempt by: %s', name);

  // compare password against remote db here
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

  // TODO: add registration form
}

module.exports = registerRoutes;
