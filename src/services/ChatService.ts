import { io } from 'socket.io-client';
const _ = require('lodash');

interface Message {
  email: string
  dateTime: string
  message: string
}

function outputMessage(message: Message) {
  const chatMessages = document.querySelector('.chat-messages');
  const currentUserEmail = localStorage.getItem('email');
  const div = document.createElement('div');
  div.classList.add('message');
  if (currentUserEmail === message.email) div.style.marginLeft = 'auto'
  else div.style.marginRight = 'auto';
  const p = document.createElement('p');
  p.classList.add('meta');
  p.innerText = message.email;
  p.innerHTML += `<span>${message.dateTime}</span>`;
  div.appendChild(p);
  const para = document.createElement('p');
  para.classList.add('text');
  para.innerText = message.message;
  div.appendChild(para);
  document.querySelector('.chat-messages').appendChild(div);
}

const serverUrl = 'http://localhost:5000';
const socket = io(serverUrl);

socket.on('connect', () => {
  console.log('Connected to socket id: ', socket.id);
});

socket.on('user-connected', (users) => {
  console.log('user-connected', users);
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
  console.log('user-disconnect', users);
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
  console.log(messages);

  // Logika kuri atvaizduoja laiskus
  // Prisijungusio userio laiskai turetu atsivaizduoti is desines
  // Kitu useriu is kaires
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