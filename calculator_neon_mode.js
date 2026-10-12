var display = document.querySelector("#display");


function showIt(val){
    var content = display.value + val;
    display.value = content;
    
    
}

function clearDisplay(){
    display.value = "";
}

function result(){
    var result = eval(display.value);
    display.value = result;
    
}

function removeIt(){
    display.value = display.value.slice(0,-1)
}

function persentageIt(){
    if (display.value == ""){
        return;
    }

    display.value = eval(display.value)/100;
}