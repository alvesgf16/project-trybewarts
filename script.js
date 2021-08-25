let loginBtn = document.querySelector('.login-button')
let email = document.getElementById('email')
let password = document.getElementById('password')
loginBtn.addEventListener('click', alerta)

function alerta(){
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert("Olá, Tryber!")
  } else{
    alert("Email ou senha inválidos.")
  }
}