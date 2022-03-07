const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors')

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: ["http://localhost:3000"]
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
    socket.join('main');
    socket.emit('user-connected', users);
    socket.broadcast.to('main').emit('user-connected', users);
  });

  socket.on('user-disconnect', (user) => {
    users = _.filter(users, item => item.email !== user.email);
    console.log('User disconnected: ', user, users);

    socket.broadcast.to('main').emit('user-disconnect', users);
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
    socket.broadcast.to('main').emit('message-send', messages);
    socket.emit('message-send', messages);
  });
})


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
