const submitButton = document.querySelector('.button-section button');
const inputs = document.querySelectorAll('input');
const passwI1 = document.querySelector('#password');
const passwI2 = document.querySelector('#confirm-passw');
submitButton.addEventListener('click', () => {
    let passw1 = passwI1.value;
    let passw2 = passwI2.value;
    if (passw1 == passw2) {
        passwI1.classList.remove('invalid')
        passwI2.classList.remove('invalid')
    }

    for (const input of inputs) {
        if (input.validity.valid) {
            input.classList.remove('invalid');
        } else {
            input.classList.add('invalid');
        }
    }

    if (passw1 != passw2) { 
        passwI1.setCustomValidity("Passwords do not match")
        passwI1.classList.add('invalid')
        passwI2.classList.add('invalid')
    } else {
        passwI1.setCustomValidity("")
    }
});

// TODO
// add pass word responiveness
// better validation of other inputs