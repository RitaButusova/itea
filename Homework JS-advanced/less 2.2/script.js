let confirmPassword = document.querySelector(".confPassword");
var registrationPassword = confirmPassword.remove();

function register () {
        let elemBegin = document.getElementById('a');
        let container = document.getElementsByClassName('container')[0]; 
        container.insertBefore(confirmPassword, elemBegin);
    }
function entry () {
    var registrationPassword = confirmPassword.remove();
    }