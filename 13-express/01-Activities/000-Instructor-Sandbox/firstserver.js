const http = require('http');

const PORT = 80;

const handleRequest = (request, response) => {
    console.log('A user has visited my site!');
    response.end("It works!  Hello world!  We are hitting: " + request.url );
}

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log('Server is listening on port: http://localhost:' + PORT);
});