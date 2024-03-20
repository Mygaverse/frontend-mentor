const ratingButtons = document.querySelectorAll('.rating-btn');
const submitButton = document.getElementById('submit-btn');
const ratingState = document.getElementById('rating-state');
const thankYouState = document.getElementById('thank-you-state');
const displayResult = document.getElementById('display-result');

let selectedRating;

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedRating = button.dataset.value;
    ratingButtons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
  });
});

submitButton.addEventListener('click', () => {
  if (selectedRating) {
    displayResult.textContent = `You selected ${selectedRating} out of 5`;
    thankYouState.classList.remove('hidden');
    ratingState.setAttribute("hidden","hidden");
  } else {
    alert('Please select a rating!');
  }
});