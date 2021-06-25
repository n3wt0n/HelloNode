// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end("<h1>Hello :)</h1>\n");
});

// listen on localhost:2345
server.listen(2345);
console.log("Server listening at http://127.0.0.1:2345/");

