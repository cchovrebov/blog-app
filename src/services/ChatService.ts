import { io } from 'socket.io-client';
const _ = require('lodash');

interface Message {
  email: string
  dateTime: string
  message: string
}

const serverUrl = 'http://localhost:5000';
const socket = io(serverUrl);

socket.on('connect', () => {
  console.log('Connected to socket id: ', socket.id);
});

socket.on('user-connect', (users, email) => {
  console.log(users, email);
  const currentUser = _.find(users, { email });

  if (currentUser) {
    const currentUserElement = document.getElementById('current-user');
    currentUserElement.innerText = currentUser.email;
  }
  const otherUsers = _.filter(users, (user: {
    email: string
  }) => user.email !== email);

  const usersList = document.getElementById('users');
  usersList.innerHTML = '';
  const generatedUsers = _.map(otherUsers, (user: {
    email: string,
  }) => `<li>${user.email}</li>`).join('');
  usersList.innerHTML = generatedUsers;
});


socket.on('user-disconnect', (users) => {
  const usersList = document.getElementById('users');
  const generatedUsers = _.map(users, (user: {
    email: string,
  }) => `<li>${user.email}</li>`).join('');
  usersList.innerHTML = generatedUsers;
});

socket.on('message-send', (messages) => {
  console.log(messages);

  // Logika kuri atvaizduoja laiskus
  // Prisijungusio userio laiskai turetu atsivaizduoti is desines
  // Kitu useriu is kaires
})

export function connectUser(user: {
  email: string,
}) {
  socket.emit('user-connect', user);
}

export function disconnectUser(user: {
  email: string,
}) {
  socket.emit('user-disconnect', user);
}

export function sendMessage(message: Message) {
  socket.emit('message-send', message);
}