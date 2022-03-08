interface Message {
  email: string
  dateTime: string
  message: string
}

export function outputMessage(message: Message) {
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