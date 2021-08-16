// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {

  if (request.url === "/new") {
    response.writeHead(200, {"Content-Type": "text/html"});  
    response.end("<h1>Hello From CoderDave :)</h1>\n");
  }
  else {
    response.writeHead(200, {"Content-Type": "text/html"});  
    response.end("<h1>Hello YouTube :)</h1>\n");
  }
});

// listen on localhost:2345
server.listen(2345);
console.log("Server listening at http://127.0.0.1:2345/");

