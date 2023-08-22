const btnLogin = document.getElementById("btn-login");

const email = document.getElementById("email");
const password = document.getElementById("password");

const userLogin = JSON.parse(localStorage.getItem("userLogin"));
const users = JSON.parse(localStorage.getItem("users"));

btnLogin.addEventListener("click", function (e) {
    e.preventDefault();

    if (email.value === "") {
        alert("Filed 'Email' cannot be empty!");
    } else if (password.value === "") {
        alert("Filed 'Password' cannot be empty!");
    } else {
        if (users) {
            let flagLogin = false;

            for (let i = 0; i < users.length; i++) {
                if (users[i].email == email.value &&
                    users[i].password == password.value) {
                    flagLogin = true;
                    var index = i;
                    break;
                }
            }

            if (flagLogin) {
                alert("Login success!")
                var e = users[index].email;
                var n = users[index].name;
                var p = users[index].password;
                // console.log(e);
                // console.log(n);
                // console.log(p);
                var list = [];
                if (userLogin === null) {
                    // console.log("null");
                    list.push({
                        name: n,
                        email: e,
                        password: p,
                    });
                    localStorage.setItem("userLogin", JSON.stringify(list));
                    window.location.href = "index.html";
                } else {
                    // console.log("not");
                    userLogin.splice(0, 99);
                    list.push({
                        name: n,
                        email: e,
                        password: p,
                    });
                    localStorage.setItem("userLogin", JSON.stringify(list));
                    // console.log(userLogin);
                    window.location.href = "index.html";
                }
            } else {
                alert("Incorrect Email or Password !");
            }
            // if (flagLogin) {
            //     alert("Login success!")
            //     window.location.href = "index.html";
            // } else {
            //     alert("Incorrect Email or Password !");
            // }
        }
    }
})

