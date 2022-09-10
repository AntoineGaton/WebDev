//Picture Change
var photo1 = document.querySelector("#succulents-1");

function over(){
    photo1.src = "./assets/succulents-2.jpg";
}

function out(){
    photo1.src = "./assets/succulents-1.jpg";
}

//Alert Dissapear
var cookie = document.querySelector("#cookie")
function clear_alert(){
    cookie.remove();
}