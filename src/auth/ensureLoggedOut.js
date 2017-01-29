/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = function ensureLoggedOut(options) {
  if (typeof options === 'string') {
    options = {
      redirectTo: options
    };
  }
  options = options || {};

  var url = options.redirectTo || '/';

  return function(req, res, next) {
    if (req.isAuthenticated && req.isAuthenticated()) {
      return res.redirect(url);
    }
    next();
  };
};
