import validator from 'validator';

const form = document.querySelector('.feedback-form');

let savedfeedbackMessage = JSON.parse(
  localStorage.getItem('feedback-form-state')
);

function addSavedInformation({ email = '', message = '' }) {
  {
    form.message.value = message;
    form.email.value = email;
  }
  return;
}
if (savedfeedbackMessage !== null) {
  addSavedInformation(savedfeedbackMessage);
}

let feedbackMessage = {};
form.addEventListener('input', inputHandler);

function inputHandler(event) {
  let email = event.currentTarget.elements[0].value;
  let message = event.currentTarget.elements[1].value;
  feedbackMessage.email = email.trim();
  feedbackMessage.message = message.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackMessage));
}

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  if (inputCheck(feedbackMessage)) {
    console.log(feedbackMessage);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  } else {
    alert('There is no email or message');
  }
}

function inputCheck(obj) {
  const { email = '', message = '' } = obj;
  return validator.isEmail(email) && !validator.isEmpty(message);
}
