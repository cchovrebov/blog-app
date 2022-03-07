const io = require('socket.io')(5000, {
  cors: {
    origin: ['http://localhost:3000']
  }
});

const _ = require('lodash');

let users = [];
const messages = [];

io.on('connection', socket => {

  socket.on('user-connect', (user) => {
    if (!_.find(users, { email: user.email })) {
      users.push(user);
    }
    console.log('User connected: ', user, users);
    socket.emit('user-connect', users, user.email);
  });

  socket.on('user-disconnect', (user) => {
    users = _.filter(users, item => item.email !== user.email);
    console.log('User disconnected: ', user, users);
    socket.emit('user-disconnect', users);
  });

  socket.on('message-send', (message) => {
    console.log('Message sent: ', message);
    if (!_.find(messages, {
      email: message.email,
      message: message.message,
      dateTime: message.dateTime
    })) {
      messages.push(message);
    }
    socket.emit('message-send', messages);
  });
})