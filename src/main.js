var restify = require('restify');

var port = process.env.PORT || 3000;
var server = restify.createServer({
  name: 'SpeedRunsLive',
  version: '0.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:name', function(req, res, next) {
  res.send(req.params);
  return next();
});

server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});
