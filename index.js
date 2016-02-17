var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    path = require('path');

server.listen(3000);

app.use(express.static(path.join(__dirname, 'build')));

io.on('connection', function (socket) {
  socket.emit('hello', { message: 'It works!' });
});
