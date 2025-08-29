document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const errorDiv = document.getElementById("error");

    loginBtn.addEventListener("click", function () {
        if (username.value.trim() === "" || password.value.trim() === "") {
            errorDiv.textContent = "Username and Password cannot be empty.";
        }
        else if (username.value.trim() === "khadijaasif123" && password.value.trim() === "khadija567") {
            errorDiv.textContent = "";

            if (window.innerWidth <= 768) {
                window.location.href = "provinces.html";
            } else {
                window.location.href = "index2.html";
            }
        }
        else {
            errorDiv.textContent = "Invalid Username or Password.";
        }
    });

});
