'use strict';

module.exports = exports = {};

exports.nickCommand = function (message, socket) {
  socket.username = message.split(' ').slice(1).join(' ').trim();
  socket.write(`you are now ${socket.username}\n`);
};

exports.dmCommand = function dmCommand(message, array, socket){
  let toUsername = message.split(' ')[1];
  let content = message.split(' ').slice(2).join(' ').trim();
  array.forEach(s => {
    if (s.username === toUsername)
      s.write(`${socket.username}: ${content}`);
  });
};

exports.userCommand = function userCommand(array, socket){
  array.forEach(user => {
    socket.write(user.username + '\n');
  });
};

exports.trollCommand = function(message, array){
  let content = message.split(' ').slice(1).join(' ').trim();
  array.forEach(user => {
    for (var i = 0; i < 10; i++) {
      user.write(content  + '\n');
    }
  });
};

exports.banCommand = function(message, array){
  let toUsername = message.split(' ')[1].trim();
  array.forEach(s => {
    if (s.username === toUsername)
      s.end(`${s.username} has been banned `);
  });
};
