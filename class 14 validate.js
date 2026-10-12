var uname = document.querySelector("#uname");
var email = document.querySelector("#email");
var pass1 = document.querySelector("#pass1");
var pass2 = document.querySelector("#pass2");
var mobile = document.querySelector("#mobile");

var error = document.querySelector("#error")

function validate() {
    if (uname.value == "") {
        error.innerHTML = "Username is required";
        return false;
    }

    else if (email.value == "") {
        error.innerHTML = "Email is required";
        return false; 
    }

    else if (pass1.value.length < 8) {
        error.innerHTML = "Password must be at least 8 characters long";
        return false; 
    }

    else if (pass1.value != pass2.value ) {
        error.innerHTML = "Password do not match";
        return false; 
    }

    else if (mobile.value.length != 11) {
        error.innerHTML = "Mobile Number must have 11 digits";
        return false; 
    }
}



