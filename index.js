var http = require('http');

const port = 8000;

http.createServer((req, res) => {
    res.write('Hello World!');
    res.end();
}).listen(port);

console.log(`Hello World server is running on port: ${port}`);
