const http = require('http');

const PORT1 = 10;
const PORT2 = 7050;

function handleRequest1(request, response) {
  response.end("I am a beautiful butterly");
}
function handleRequest2(request, response) {
  response.end("Box of chocolates");
}

const server1 = http.createServer(handleRequest1);
const server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function() {
  console.log("Server listening on: http://localhost:" + PORT1);
});
server2.listen(PORT2, function() {
  console.log("Server listening on: http://localhost:" + PORT2);
});