const http = require('http');
const fs = require('fs');

const PORT = 8080

const server = http.createServer(handleRequest);

function handleRequest(req, res) {

  var path = req.url;
  var page = "";

  switch(path) {
    case "/":
      page = "/home.html";
      break;
    case "/movies":
      page = "/movies.html";
      break;
    case "/food":
      page = "/food.html";
      break;
    case "/cssFrameworks":
      page = "/cssFrameworks.html";
      break;
    default:
      page = "/404error.html";
      break;
    };

  return fs.readFile(__dirname + page, function(err, data) {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
    
}

// const server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
