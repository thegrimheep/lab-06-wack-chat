'use strict';

const net = require('net');
const server = net.createServer();

let sockets = [];

function usernameCommand (message, socket) {
  socket.username = message.split('').slice(1).join('').trim;
  socket.write(`Your user name is now ${socket.username}`);
}

function dmCommand (message) {
  let toUsername = message.split('')[1];
  let content = message.split ('').slice(2).join('').trim();
  sockets.forEach(s => {
    if (s.username === toUsername)
      s.write(content);
  });
}

server.on('connection', function(socket) {
  console.log('someone is here');
  //socket.write('what up, what you got to say');
  socket.username = `talker_${Math.floor(Math.random() * 100)}`;
  socket.push(socket);
  socket.on('data', function(buffer) {
    let message = buffer.toString();

    if(message.startsWith('/change username'))
      return usernameCommand(message, socket);

    if(message.startsWith('/dm'))
      return dmCommand(message);

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

server.listen(3000, function () {
  console.log('we on');
});
