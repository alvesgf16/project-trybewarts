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
    rateOption.value = [index];
    rateOption.name = 'rate';
    rateOption.id = `option-${[index]}`;

    const rateLabel = document.createElement('label');
    rateLabel.setAttribute('for', `option-${index}`);
    rateLabel.innerText = [index];

    rateDiv.appendChild(rateOption);
    rateDiv.appendChild(rateLabel);
    console.log(rateOption);
  }
}

function enableSubmitButton() {
  const agreementCheckbox = document.getElementById('agreement');
  const submitButton = document.getElementById('submit-btn');

  if (agreementCheckbox.checked) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', true);
  }
}

function addCounter() {
  const counter = document.getElementById('counter');
  const textArea = document.getElementById('textarea');

  counter.innerText = 500;

  textArea.addEventListener('keyup', () => {
    counter.innerText = 500 - textArea.value.length;
  });
}

window.onload = () => {
  const agreementCheckbox = document.getElementById('agreement');

  createRatingOptions();
  agreementCheckbox.addEventListener('change', enableSubmitButton);

  addCounter();
};
