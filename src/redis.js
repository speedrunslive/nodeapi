/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = require('redis').createClient({
  host: process.env.REDIS_HOST
});
