'use strict';

const net = require('net');
const server = net.createServer();
const parse = require('./lib/parse-message.js');

let sockets = [];

server.on('connection', function(socket) {
  console.log('someone is here');
  socket.write('what up, what you got to say');
  socket.username = `talker_${Math.floor(Math.random() * 100)}`;
  sockets.push(socket);
  socket.on('data', function(buffer) {
    let message = buffer.toString();

    if(message.startsWith('/change username'))
      return parse.usernameCommand(message, socket);

    if(message.startsWith('/dm'))
      return parse.dmCommand(message, sockets, socket);

    if(message.startsWith('/users'))
      return parse.usersCommand(sockets, socket);

    if(message.startsWith('/troll'))
      return parse.trollCommand(message, sockets);

    if(message.startsWith('/ban'))
      return parse.banCommand(message, sockets);

    sockets.forEach(s => {
      s.write(`${socket.username}: ${message}`);
    });
  });

  socket.on('close', function() {
    console.log('somebody gone');
    sockets.forEach((s, index) => {
      if(s == socket)
        sockets.splice(index, 1);
    });
  });
});

server.listen(3001, function () {
  console.log('we on');
});
