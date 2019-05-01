
function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}


function validate() {
    var email = document.getElementById('InputEmail');
    var errorEmail = document.getElementById('text-error-email');
    email.style.borderColor = "green";
    var error = document.querySelector('.error-message');
    if (error){
        error.remove();
    }
    
    if (email.value.indexOf('@') < 0 || email.value.indexOf('.') < 0 || !email.value){
        showError(errorEmail, "Некорректный email"); 
        email.style.borderColor = "red";
    }
}

function entry() {
    var error = document.querySelector('.error-message');
    if (!error) {
        console.log("Перенаправить на сайт");
    }
}
