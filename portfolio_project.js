var Name = document.querySelector("#name");
var Email = document.querySelector("#email");
var Reason = document.querySelector("#reason");

var Error = document.querySelector("#error")

var Hi = document.querySelector("#hi")

var Fact = document.querySelector("#fact")

function valid() {
    if (Name.value == "") {
        Error.innerHTML = "Name is required";
        return false;
    }

    else if (Email.value == "") {
        Error.innerHTML = "Email is required";
        return false; 
    }

    else if (Reason.value == "Choose One") {
        Error.innerHTML = "Reason is required";
        return false;

    }

    else{
       Error.innerHTML = "Message send successful";
       document.getElementById("error").style.color = "#25fe25"; 
    }
}

function hicommand(){
    Hi.innerHTML = "Hello! Nice to meet you I am Abu Maimun Siddique. Welcome to my portfolio."
}

function fact(){
    Fact.innerHTML ="Fun Fact: I am good at maths, that's why I am good at coding also."
}