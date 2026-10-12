function turnon(){
    document.getElementById("bulb").src = "bulb on.png";
    document.getElementById("status").innerHTML = "The Bulb is On";
    document.getElementById("status").style.color = "#FFFFFF";
    document.getElementById("status").style.textShadow = "0px 0px 4px #00e5ff, 0px 0px 18px #00e5ff";


}

function turnoff(){
    document.getElementById("bulb").src = "bulb off.png";
    document.getElementById("status").innerHTML = "The Bulb is Off";
    document.getElementById("status").style.color = "#FFFFFF";
    document.getElementById("status").style.textShadow = "0px 0px 4px #00e5ff, 0px 0px 18px #00e5ff";
}