'use strict';

var http = require('http');

class Server {
    constructor (port) {
        this.server = http.createServer(function(req, res) {
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.write('Hello world!');
            res.end();
        });
        this.server.listen(port, function () {
            console.log('HTTP server listening on port ' + port);
        });
    }
}

module.exports = Server;
