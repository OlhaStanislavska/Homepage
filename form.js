let form = document.getElementById("registration");

form.onsubmit = function() {
    if (!form.login.value) {
        alert("Login is missing");
        return false;
    }
    else if (!form.password.value) {
        alert("Password is missing");
        return false;
    }
    else if (form.password.value != form.repassword.value) {
        alert("Password do not match");
        return false;
    }
    else if (!form[3].checked) {
        alert("Confirm you are not a robot");
        return false;
    }
    let name = form.login.value;
    alert('hello, ' + name);
    return false;
}



