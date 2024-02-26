import validator from 'validator';

const form = document.querySelector('.feedback-form');

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
  let email = event.currentTarget.elements[0].value;
  let message = event.currentTarget.elements[1].value;
  feedbackMessage.email = email.trim();
  feedbackMessage.message = message.trim();
  console.log('This is feedback message: ', feedbackMessage);

  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackMessage));
}

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  console.log('InputChesk in submit', inputCheck(feedbackMessage));
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
  console.log('This email and message from input check: ', email, message);
  console.log('Email check: ', validator.isEmail(email));
  console.log('Message check: ', !validator.isEmpty(message));
  return validator.isEmail(email) && !validator.isEmpty(message);
}
