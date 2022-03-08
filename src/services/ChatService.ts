import { io } from 'socket.io-client';
import { outputMessage } from '../helpers/chat.helper';
import { API_URL } from '../constants';
const _ = require('lodash');

interface Message {
  email: string
  dateTime: string
  message: string
}
const socket = io(API_URL);

socket.on('connect', () => {
  console.log('Connected to socket id: ', socket.id);
});

socket.on('user-connected', (users) => {
  const currentUserEmail = localStorage.getItem('email');
  const currentUser = _.find(users, { email: currentUserEmail });

  if (currentUser) {
    const currentUserElement = document.getElementById('current-user');
    currentUserElement.innerText = currentUser.email;
  }
  const otherUsers = _.filter(users, (user: {
    email: string
  }) => user.email !== currentUserEmail);

  const usersList = document.getElementById('users');
  usersList.innerHTML = '';
  const generatedUsers = _.map(otherUsers, (user: {
    email: string,
  }) => `<li>${user.email}</li>`).join('');
  usersList.innerHTML = generatedUsers;
});


socket.on('user-disconnect', (users) => {
  const currentUserEmail = localStorage.getItem('email');
  const otherUsers = _.filter(users, (user: {
    email: string
  }) => user.email !== currentUserEmail);
  const usersList = document.getElementById('users');
  const generatedUsers = _.map(otherUsers, (user: {
    email: string,
  }) => `<li>${user.email}</li>`).join('');
  usersList.innerHTML = generatedUsers;
});

socket.on('message-send', (messages: Message[]) => {
  document.querySelector('.chat-messages').innerHTML = '';
  _.forEach(messages, (message: Message) => {
    outputMessage(message);
  });
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