if (localStorage.getItem("userLogin") === null) {
    window.onload = function () {
        var myText = document.querySelector(".id-login");
        myText.innerHTML = `
        <a href="./login.html">
            <i class="fa-solid fa-user">&nbsp;</i>
           Đăng nhập
        </a> `;
    }
} else {
    window.onload = function () {
        const listUserLogin = JSON.parse(localStorage.getItem("userLogin"));
        let user = listUserLogin.reduce((t, v) => {
            const { name, ...rest } = v;
            return v;
        }, {});
        var myText = document.querySelector(".id-login");
        myText.innerHTML = `
        <a href="./user.html">
            <i class="fa-solid fa-user">&nbsp;</i>
            Welcome <i style="font-weight:bold;">${user.name}</i> to my website <i class="fa-solid fa-heart" style="color:red;"></i> !
        </a> `;
    }
}