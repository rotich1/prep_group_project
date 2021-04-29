function show() {
    var password = document.getElementById("password");
    var icon = document.querySelector(".fas")

    // ========== Checking type of password ===========
    if (password.type === "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
};

function log() {
    // var password = document.getElementsByClassName("password").value;
    // // var username = document.getElementsByClassName("fullname");
    // var username = document.getElementsByClassName("username").value;

    window.location.replace("home.html");

}