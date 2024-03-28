const emailInput = document.getElementById('email-input');
const message = document.getElementById('message');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); //Prevent default form submission

    const email = emailInput.value.trim(); //retrieve email value without space
    message.style.color = 'red'; //set initial message color red

    if (email === '') {
        //check if email is empty
        message.textContent = 'Whoops! It looks like you forgot to add your email.';
        emailInput.classList.add('error-focus'); //add error focus
    } else if (!validateEmail(email)) {
        //validate email format by using regular expression
        message.textContent = 'Please provide a valid email address!';
        emailInput.classList.add('error-focus'); //add error focus
    } else {
        //successful submission
        message.textContent = 'Success! You are subscribed to our waitlist!';
        message.style.color = 'green'; //set success message color green
        emailInput.value = ''; //clear the input field
        emailInput.classList.remove('error-focus'); //remove error focus
        
    }
});

//regular expression
function validateEmail(email) {
    const re =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}