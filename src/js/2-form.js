import validator from 'validator';

const form = document.querySelector('.feedback-form');

// form.addEventListener('input', inputHandler);

let savedfeedbackMessage = JSON.parse(
  localStorage.getItem('feedback-form-state')
);

function addSavedInformation({ email = '', message = '' }) {
  {
    console.log('this is form message: ', (form.message.value = message));
    console.log('This is form email: ', (form.email.value = email));
  }
  return;
}
if (savedfeedbackMessage !== null) {
  addSavedInformation(savedfeedbackMessage);
}

console.log('This is saved feedback message: ', savedfeedbackMessage);

let feedbackMessage = {};

form.addEventListener('input', inputHandler);

function inputHandler(event) {
  event.preventDefault();
  let value = event.target.value;
  event.target.nodeName === 'INPUT'
    ? (feedbackMessage.email = value.trim())
    : (feedbackMessage.message = value.trim());

  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackMessage));
}

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  if (inputCheck(feedbackMessage)) {
    console.log(feedbackMessage);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    feedbackMessage = {};
  } else alert('There is no email or message');
}

function inputCheck({ email = '', message = '' }) {
  console.log('This email and message from input check: ', email, message);
  return validator.isEmail(email) && !validator.isEmpty(message);
}
