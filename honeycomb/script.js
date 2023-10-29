const btnMessage = document.querySelector('.main_screensaver');
const formWrapper = document.querySelector('.main__message');

const form = document.querySelector('.form');
const userNameInput = document.querySelector('.form__name');

const emailInput = document.querySelector('.form__email');
const textInput = document.querySelector('.form__message');
const btn = document.querySelector('.form__btn');

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

btnMessage.addEventListener('click', () => {
  formWrapper.classList.toggle('form__open');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

btn.addEventListener('click', () => {
  if (
    !/^[a-z]{3,}$/g.test(userNameInput.value) ||
    userNameInput.value.length === 0
  ) {
    alert('Ошибка в имени');
  } else if (!EMAIL_REGEXP.test(emailInput.value)) {
    alert('Неверный email');
  } else if (textInput.value === '') {
    alert('Не ввели сообщение');
  } else {
    form.submit();
  }
});
