console.log("Hello world");

const http = require('http');
const server = http.createServer((rep, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('bidnii anhnii server');
});

server.listen(3000, () => {
    console.log('server http://localhost3000 geer ajillaj baina');
})