var cartCount = 0;
var spancartcount = document.querySelector("#cartcount")

function add() {
    cartCount++;
    spancartcount.innerText = cartCount
}

var bannerImg = document.querySelector("#banner-img");

function swapImg() {
    bannerImg.src = "/images/pixel-ninjas-2.png"
}

function swapBack() {
    bannerImg.src = "/images/stonepunk.png"
}

function displayMessage() {
    alert("This game is supported on Linux")
}
