var fname = document.querySelector("#fname");
var lname =document.querySelector("#lname");
var email =document.querySelector("#email");
var Password =document.querySelector("#Password");
var number =document.querySelector("#number");
var Gender =document.querySelector("#Gender");
var Meal =document.querySelector("#Meal");
var boarding =document.querySelector("#boarding");
var destination =document.querySelector("#destination");

var error =document.querySelector("#error");

function valid(){
    if (fname.value == "") {
        error.innerHTML = "First name is required";
        return false;
    }

    else if (lname.value == "") {
        error.innerHTML = "Last name is required";
        return false;
    }

    else if (email.value == "") {
        error.innerHTML = "Email is required";
        return false; 
    }

    else if (Password.value.length < 8) {
        error.innerHTML = "Password must be at least 8 characters long";
        return false; 
    }

    else if (number.value.length != 11) {
        error.innerHTML = "Mobile Number must have 11 digits";
        return false; 
    }

    else if (boarding.value == "Choose") {
        error.innerHTML = "Boarding is required";
        return false; 
    }

    else if (destination.value == "Choose") {
        error.innerHTML = "Destination is required";
        return false; 
    }
}