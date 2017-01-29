/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = function ensureLoggedIn(options) {
  if (typeof options === 'string') {
    options = {
      redirectTo: options
    };
  }
  options = options || {};

  var url = options.redirectTo || '/login';
  var setReturnTo = (typeof options.setReturnTo === 'undefined') ? true :
    options.setReturnTo;

  function isAjax(req) {
    // X-Requested-With is usually sent on XHRs (by libraries like jquery)
    // But the other way we can detect this is by looking for an explicit query
    // string parameter that might be sent
    return (req.query && req.query.ajax === 'true') || req.header(
      'x-requested-with');
  }

  return function(req, res, next) {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
      if (isAjax(req)) {
        res.send(401);
        return next(false);
      }
      if (setReturnTo && req.session) {
        req.session.returnTo = req.originalUrl || req.url;
      }
      return res.redirect(url, next);
    } else {
      next();
    }
  };
};
