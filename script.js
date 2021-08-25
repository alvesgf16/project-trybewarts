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

function createRatingOptions() {
  const rateDiv = document.getElementById('rate-options');

  for (let index = 1; index <= 10; index += 1) {
    const rateOption = document.createElement('input');
    rateOption.type = 'radio';
    rateOption.value = toString([index]);
    rateOption.name = 'rate';
    rateOption.id = `option-${[index]}`;

    const rateLabel = document.createElement('label');
    rateLabel.setAttribute('for', `option-${index}`);
    rateLabel.innerText = [index];

    rateDiv.appendChild(rateOption);
    rateDiv.appendChild(rateLabel);
  }
}

window.onload = () => {
  createRatingOptions();
};
