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
    console.log('User connected: ', user);
    if (!_.find(users, { email: user.email })) {
      users.push(user);
    }
    socket.emit('user-connect', users, user.email);
  });

  socket.on('user-disconnect', (user) => {
    console.log('User disconnected: ', user);
    users = _.filter(users, { email: user.email });
    socket.emit('user-disconnect', users);
  });

  socket.on('message-send', (message) => {
    console.log('Message sent: ', message);
    if (!_.find(messages, { id: message.id })) {
      users.push(message);
    }
    socket.emit('message-created', messages);
  });
})