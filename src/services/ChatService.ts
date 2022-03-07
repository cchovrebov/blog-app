import { io } from 'socket.io-client';
const _ = require('lodash');

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

export function connectUser(user: {
  email: string,
}) {
  socket.emit('user-connect', user);
}