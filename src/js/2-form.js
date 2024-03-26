function saveToLocalStorage() {
  const formData = {
    email: document.querySelector('input[name="email"]').value.trim(),
    message: document.querySelector('textarea[name="message"]').value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function fillFormFromLocalStorage() {
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formData) {
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
}

function clearLocalStorage() {
  localStorage.removeItem('feedback-form-state');
}

fillFormFromLocalStorage();

document.querySelector('.feedback-form').addEventListener('input', () => {
  saveToLocalStorage();
});

document.querySelector('.feedback-form').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.querySelector('input[name="email"]').value.trim();
  const message = document
    .querySelector('textarea[name="message"]')
    .value.trim();

  if (email && message) {
    console.log({ email, message });
    clearLocalStorage();
    document.querySelector('.feedback-form').reset();
  }
});
