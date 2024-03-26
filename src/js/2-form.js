const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', onFormInput);

getFormInput();

function onFormInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getFormInput() {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  let savedEmail = formData.email;
  let savedMessage = formData.message;
  if (savedEmail) {
    form.elements.email.value = savedEmail;
  }
  if (savedMessage) {
    form.elements.message.value = savedMessage;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const emailEl = event.target.elements.email.value;
  const messageEl = event.target.elements.message.value;
  console.log({ email: emailEl, message: messageEl });

  if (emailEl === '' || messageEl === '') {
    return alert('Please fill in all the fields!');
  }

  console.log('send');
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
  form.reset();
}
