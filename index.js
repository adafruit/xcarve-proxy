var util = require('util'),
    httpProxy = require('http-proxy'),
    host = (process.platform === 'win32' ? 'xcarve' : 'xcarve.local'),
    port = 1338;

var server = httpProxy.createServer({
  target: 'ws://' + host + ':' + port,
  ws: true
});

server.listen(port);
process.on('uncaughtException', console.log);
