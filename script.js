const subscribeForm = document.querySelector('.subscribe_form');
const formGroup = document.querySelector('.form_group');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.message');

const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const isValid = function (bln, message) {
    if (bln === false) {
        !formGroup.classList.contains('error') ? formGroup.classList.add('error') : null;
        errorMessage.textContent = message;
    }
    if (bln === true) {
        formGroup.classList.contains('error') ? formGroup.classList.remove('error') : null;
        errorMessage.textContent = '';
        emailInput.value = '';
    }
}

subscribeForm.addEventListener('submit', e => {
    e.preventDefault();
    if (emailInput.value === '') {
        isValid(false, 'Email field cannot be empty');
        return;
    }
    if (!emailPattern.test(emailInput.value)) {
        isValid(false, 'Please provide a valid email address');
        return;
    }
    isValid(true);
});