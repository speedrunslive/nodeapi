'use strict';

var restify = require('restify');
var formatPrettyJSON = require('./formatters/prettyjson');

var port = process.env.PORT || 3000;
var server = restify.createServer({
  name: 'SpeedRunsLive',
  version: '0.0.0',
  formatters: {
    'application/json': formatPrettyJSON
  }
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

require('./routes/v1/players')(server);

server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});
