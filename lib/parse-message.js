'use strict';

module.exports = exports = {};

exports.usernameCommand = function (message, socket) {
  socket.username = message.split(' ').slice(1).join(' ').trim();
  socket.write(`Your username is now ${socket.username}`);
};

exports.dmCommand = function (message, array, socket) {
  let toUsername = message.split(' ')[1];
  let content = message.split (' ').slice(2).join(' ').trim();
  array.forEach(s => {
    if (s.username === toUsername)
      s.write(`${socket.username}${content}`);
  });
};

exports.usersCommand = function(array, socket) {
  array.forEach(users => {
    socket.write(users.username + '\n');
  });
};

exports.trollCommand = function(message, array) {
  let content = message.split(' ').slice(1).join(' ').trim();
  array.forEach(users => {
    for (var i = 0; i < 10; i++) {
      users.write(content + '\n');
    }
  });
};

exports.banCommand = function(message, array){
  let toUsername = message.split(' ')[1].trim();
  array.forEach((s, index) => {
    if (s.username === toUsername) {
      array.splice(index, 1);
      s.end(`${s.username} has been banned `);
    }
  });
};
