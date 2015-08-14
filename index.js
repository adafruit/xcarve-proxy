var util = require('util'),
    httpProxy = require('http-proxy'),
    host = 'xcarve.local',
    port = 1338;

var server = httpProxy.createServer({
  target: 'ws://' + host + ':' + port,
  ws: true
});

server.listen(port);
process.on('uncaughtException', console.log);
