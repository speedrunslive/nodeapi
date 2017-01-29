/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var oauth2orize = require('oauth2orize-restify'),
  passport = require('passport-restify'),
  idgen = require('idgen'),
  ensureLoggedIn = require('./ensureLoggedIn'),
  store = require('../redis'),
  oauth = oauth2orize.createServer();

oauth.serializeClient(function(client, done) {
  console.log('serialise client: %s', client.client_id);

  store.hmset('session-client-' + client.client_id, client);
  return done(null, client.client_id);
});

oauth.deserializeClient(function(id, done) {
  console.log('de-serialise client: %s', id);

  store.hgetall('session-client-' + id, function(error, client) {
    if (error) {
      done(error);
    } else {
      done(null, client);
    }
  });
});

// Grant authorization codes.
oauth.grant(oauth2orize.grant.code(function(client, redirectURI, user, ares,
  done) {
  var code = idgen(64);

  store.hmset('grant-' + code, {
    client: client.client_id,
    redirect_uri: redirectURI,
    user: user.id
  }, function(error) {
    if (error) {
      return done(error);
    }
    done(null, code);
  });
}));

// Grant implicit authorization.
oauth.grant(oauth2orize.grant.token(function(client, user, ares, done) {
  var token = idgen(256);

  store.hmset('authorization-code-' + token, {
    user: user.id,
    ares: ares,
    client: client.client_id
  }, function(error) {
    if (error) {
      return done(error);
    }
    done(null, token);
  });
}));

// Exchange authorization codes for access tokens.
oauth.exchange(oauth2orize.exchange.code(function(client, code, redirectURI,
  done) {
  console.log('token exchange', client.client_id, code);

  store.hgetall('grant-' + code, function(error, authCode) {
    var token = idgen(128);

    if (error) {
      return done(error);
    }
    if (client.client_id !== authCode.client) {
      return done(null, false);
    }
    if (redirectURI !== authCode.redirect_uri) {
      return done(null, false);
    }

    store.hmset('access-token-' + token, {
      user: authCode.user,
      client: authCode.client
    }, function(error) {
      if (error) {
        return done(error);
      }
      done(null, token);
    });
  });
}));

// Exchange user id and password for access tokens.
oauth.exchange(oauth2orize.exchange.password(function(client, username,
  password, scope, done) {
  console.log('user id password exchange', client, username);

  //Validate the client
  store.hgetall('client-' + client.clientId, function(error, localClient) {
    if (error) {
      return done(error);
    }
    if (localClient === null) {
      return done(null, false);
    }
    if (localClient.client_secret !== client.clientSecret) {
      return done(null, false);
    }
    //Validate the user
    store.hgetall('user-' + username, function(error, user) {
      if (error) {
        return done(error);
      }
      if (user === null) {
        return done(null, false);
      }
      if (password !== user.password) {
        return done(null, false);
      }
      //Everything validated, return the token
      var token = idgen(256);
      store.hmset('access-token-' + token, {
        user: user.id,
        client: client.clientId
      }, function(error) {
        if (error) {
          return done(error);
        }
        done(null, token);
      });
    });
  });
}));

// Exchange the client id and secret for an access token.
oauth.exchange(oauth2orize.exchange.clientCredentials(function(client, scope,
  done) {
  console.log('exchange client id/secret for access token', client);

  //Validate the client
  store.hgetall('client-' + client.clientId, function(error, localClient) {
    if (error) {
      return done(error);
    }
    if (localClient === null) {
      return done(null, false);
    }
    if (localClient.client_secret !== client.clientSecret) {
      return done(null, false);
    }
    var token = idgen(256);
    //Pass in a null for user id since there is no user with this grant type
    store.hmset('access-token-' + token, {
      client: client.clientId
    }, function(error) {
      if (error) {
        return done(error);
      }
      done(null, token);
    });
  });
}));

var oauthAuthorization = [
  ensureLoggedIn(),
  oauth.authorization(function(clientID, redirectURI, done) {
    console.log('authorization', clientID);

    store.hgetall('client-' + clientID, function(error, client) {
      if (error) {
        return done(error);
      } else if (!client) {
        return done('no client');
      } else if (redirectURI !== client.redirect_uri) {
        return done('invalid redirect');
      } else {
        return done(null, client, redirectURI);
      }
    });
  }),
  function(req, res) {
    console.log(req.query.scope);
    // console.log(req.body.scope);
    res.send(
      '<p>Hi ' + req.user.name + '</p>' +
      '<p><b>' + req.oauth2.client.client_name +
      '</b> is requesting access to your account.</p>' +
      '<p>Do you approve?</p>' +
      '<form action="/oauth2/authorize/decision" method="post">' +
      '<input name="transaction_id" type="hidden" value="' + req.oauth2.transactionID +
      '">' +
      '<div>' +
      '<input type="submit" value="Allow" id="allow">' +
      '<input type="submit" value="Deny" name="cancel" id="deny">' +
      '</div>' +
      '<b>Requested permissions: ' + req.query.scope + '</b>' +
      '</form>'
    );
  }
];

var oauthDecision = [
  ensureLoggedIn(),
  oauth.decision()
];

var oauthToken = [
  passport.authenticate(['basic'], {
    session: false
  }),
  oauth.token(),
  oauth.errorHandler()
];

function registerRoutes(server) {
  server.get('/oauth2/authorize', oauthAuthorization);
  server.post('/oauth2/authorize', oauthDecision);
  server.post('/oauth2/token', oauthToken);
}

module.exports = registerRoutes;
