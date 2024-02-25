const form = document.querySelector('.feedback-form');

form.addEventListener('input', inputHandler);

let feedbackMessage = {};
function inputHandler(event) {
  console.log(event.target.value);
  event.target.nodeName === 'INPUT'
    ? (feedbackMessage.email = event.target.value)
    : (feedbackMessage.message = event.target.value);

  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackMessage));
}
