var express = require('express');
var app = express();
var http = require('http').Server(app);
const PORT = process.env.PORT || 3000;

var webroot = __dirname + '/client/';

const server = express()
    .use('/', express.static(__dirname + '/client/'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));

var io = require('socket.io').listen(server);
var brand = '';
var productCode = '';

io.sockets.on('connection', function (socket) {
    var clientIp = socket.request.connection.remoteAddress;
    socket.on('runData', function (data) {
        brand = data.band;
        productCode = data.productCode;
    });
});
