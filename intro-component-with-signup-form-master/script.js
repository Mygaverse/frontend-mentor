const form = document.getElementById('form');
const emailInput = document.getElementById('email-input');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const passwordInput = document.getElementById('password-input');
const errorMessageElements = document.querySelectorAll('.error-message');
const successMessageElements = document.getElementById('success-message');
const errorIcon = document.querySelectorAll('.error-icon');

form.addEventListener('submit', (event) => {
    event.preventDefault();//prevent default form submission

    let hasErrors = false;//default setting has no error

    errorMessageElements.forEach(messageElement => messageElement.textContent = '' ); //clear previous errors
    errorIcon.forEach(icon => icon.style.display = 'none' ); //hide all error icons

    //check first name
    if (firstNameInput.value.trim() === '') {
        firstNameInput.classList.add('error-field');//set the focus to red
        errorMessageElements[0].textContent = 'First Name cannot be empty'; //display error message
        errorIcon[0].style.display = 'inline'; //show error icon
        hasErrors = true; //show error
    } else {
        firstNameInput.classList.remove('error-field');//remove error class on valid input
    }

    //check last name
    if (lastNameInput.value.trim() === '') {
        lastNameInput.classList.add('error-field');
        errorMessageElements[1].textContent = 'Last Name cannot be empty';
        errorIcon[1].style.display = 'inline'; 
        hasErrors = true;
    } else {
        lastNameInput.classList.remove('error-field');
    }

    //check email format
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('error-field');
        errorMessageElements[2].textContent = 'Looks like this is not an email.';
        errorIcon[2].style.display = 'inline'; 
        hasErrors = true;
    } else {
        emailInput.classList.remove('error-field');
    }

    //check email
    if (emailInput.value.trim() === '') {
        emailInput.classList.add('error-field');
        errorMessageElements[2].textContent = 'Email cannot be empty';
        errorIcon[2].style.display = 'inline'; 
        hasErrors = true;
    } else {
        emailInput.classList.remove('error-field');
    }

    //check password
    if (passwordInput.value.trim() === '') {
        passwordInput.classList.add('error-field');
        errorMessageElements[3].textContent = 'Password cannot be empty';
        errorIcon[3].style.display = 'inline'; 
        hasErrors = true;
    } else {
        passwordInput.classList.remove('error-field');
    }

    //submit form without errors
    if (!hasErrors) {
        //successful submission
        successMessageElements.textContent = 'Application has submitted successfully!';
        form.reset();
    }
});