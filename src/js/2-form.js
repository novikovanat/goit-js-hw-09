import validator from 'validator';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', inputHandler);

let savedfeedbackMessage = JSON.parse(
  localStorage.getItem('feedback-form-state')
);

function addSavedInformation(obj) {
  if (obj !== null) {
    console.log('this is form message: ', (form.message.value = obj.message));
    console.log('This is form email: ', (form.email.value = obj.email));
  }
  return;
}

addSavedInformation(savedfeedbackMessage);

console.log(
  'This is saved feedback message: ',
  savedfeedbackMessage,
  typeof savedfeedbackMessage
);
console.log('This is null: ', typeof null);
let feedbackMessage = {};
function inputHandler(event) {
  // console.log(event.target.value);
  // console.log('This is event in input: ', event.target.elements.message.value);
  // - почему не работает ?
  event.target.nodeName === 'INPUT'
    ? (feedbackMessage.email = event.target.value)
    : (feedbackMessage.message = event.target.value);

  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackMessage));
}

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('This is event in submit: ', event.target.elements.message.value);
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
