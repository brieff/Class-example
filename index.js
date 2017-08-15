const http = require('http');
const emoji = require('node-emoji')

const server = http.createServer(function (req, res) {
  res.write(emoji.random().emoji + '\n');
  res.end();
});

server.listen(8001)
