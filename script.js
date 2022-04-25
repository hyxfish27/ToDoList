const loginView = document.querySelector('.login-view');
const registerView = document.querySelector('.register-view');


function toLoginPage() {
    loginView.style.display = "block";
    registerView.style.display = "none";
}

function toRegisterPage() {
    loginView.style.display = "none";
    registerView.style.display = "block";
}