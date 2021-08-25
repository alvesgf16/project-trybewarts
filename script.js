const loginBtn = document.querySelector('.login-button');
const email = document.getElementById('email');
const password = document.getElementById('password');
loginBtn.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
