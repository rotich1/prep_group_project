
function show() {
    var password = document.getElementById("password");
    var icon = document.querySelector(".fas");

    // ========== Checking type of password ===========
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

function signup() {
    var password = document.getElementById("password");
    var username = document.getElementById("fullname");
    var emailAddress = document.getElementById("userEmail");

    if (username.value == "" || password.value == "" || emailAddress.value == "") {
        alert("Provide all details");
    } else {

        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailAddress.value)) {
            window.location.href = 'home.html';
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)

    }
}