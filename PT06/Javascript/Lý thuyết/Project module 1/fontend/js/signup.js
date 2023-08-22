const btnRegister = document.querySelector("#btn-register");

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const users = JSON.parse(localStorage.getItem("users")) || [];

btnRegister.addEventListener("click", function (e) {
    e.preventDefault();

    if (name.value === "") {
        alert("Filed 'Name' cannot be empty!");
    } else if (email.value === "") {
        alert("Filed 'Email' cannot be empty!");
    } else if (password.value === "") {
        alert("Filed 'Password' cannot be empty!");
    } else if (confirmPassword.value === "") {
        alert("Filed 'Repeat-Password' cannot be empty!");
    } else if (password.value !== confirmPassword.value) {
        alert("Filed 'Password' and 'Repeat-Password' must be the same! ")
    } else {
        const user = {
            name: name.value,
            email: email.value,
            password: password.value,
        };

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));
        alert("Sign Up Success!");
        window.location.href = "login.html";
    }
});