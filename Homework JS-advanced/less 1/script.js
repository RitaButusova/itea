
function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
  }

function validate() {
    var errors = document.querySelectorAll('.error-message')
    for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
    var email = document.getElementById('InputEmail')
    var errorEmail = document.getElementById('text-error-email');
        if(!email.value){
            showError(errorEmail, "Поле должно быть заполнено");
            email.style.borderColor = "red";
            } else if(email.value.indexOf('@') < 0 || email.value.indexOf('.') < 0){
            showError(errorEmail, "Некорректный email"); 
            email.style.borderColor = "red";
            } else {
            showError(errorEmail, "Успех"); 
            email.style.borderColor = "green";   
            }
    var password = document.getElementById('InputPassword');
    var errorPassword = document.getElementById('text-error-password');
        if (!password.value){
            showError(errorPassword, "Поле должно быть заполненно");
            password.style.borderColor = "red";
        } else if (password.value.length < 11) {
            showError(errorPassword, "Длина пароля должна быть больше 11 символов");
            password.style.borderColor = "red";
        } else {
            showError(errorPassword, "Успех");
            password.style.borderColor = "green";
        }

    var confirmPassword = document.getElementById('confirmPassword');
    var errorConfirmPassword = document.getElementById('text-error-confirmPassword');
        if (password.value != confirmPassword.value) {
            showError(errorConfirmPassword, "Пароли не совпадают");
            password.style.borderColor = "red";
            confirmPassword.style.borderColor = "red";
        }else if (!confirmPassword.value) {
                showError(errorConfirmPassword, "Поле должно быть заполненно");
                confirmPassword.style.borderColor = "red";
        } else {
            showError(errorConfirmPassword, "Успех");
            password.style.borderColor = "green";
            confirmPassword.style.borderColor = "green";
        }
}
    
