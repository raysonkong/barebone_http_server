// setInterval(() => {console.log("1 Second interval")}, 1000);
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, {'content-type': 'text/html'});
      const homePageHTML = fs.readFileSync('./node.html');
      res.write(homePageHTML);
      res.end();
    } else if (req.url === "/logo.svg") {
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        const image = fs.readFileSync('./logo.svg');
        res.write(image);
        res.end(); 
    } else if (req.url === '/style.css') {
        res.writeHead(200, {'content-type': 'text/css'});
        const css = fs.readFileSync('./style.css');
        res.write(css);
        res.end();
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h4>Sorry, this page is not available</h4>');
    }
})

server.listen(3000);