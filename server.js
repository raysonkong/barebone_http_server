// setInterval(() => {console.log("1 Second interval")}, 1000);

const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req);
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>Hello World!</h1>')
    res.end();
})

server.listen(3000);