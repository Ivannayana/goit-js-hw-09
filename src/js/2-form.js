const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const feedbackKey = 'feedback-form-state';

function saveFeedbackToLocalStorage() {
  const feedback = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(feedbackKey, JSON.stringify(feedback));
}

function loadFeedbackFromLocalStorage() {
  const savedFeedback = localStorage.getItem(feedbackKey);
  if (savedFeedback) {
    const { email, message } = JSON.parse(savedFeedback);
    emailInput.value = email;
    messageInput.value = message;
  }
}

function clearLocalStorage() {
  localStorage.removeItem(feedbackKey);
}

form.addEventListener('input', saveFeedbackToLocalStorage);
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Form submitted!');
  clearLocalStorage();
  emailInput.value = '';
  messageInput.value = '';
});

window.addEventListener('load', loadFeedbackFromLocalStorage);
