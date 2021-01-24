var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
var randomSrc = "./images/dice"
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

img1.src = randomSrc + randomNumber1 + ".png"
img2.src = randomSrc + randomNumber2 + ".png"

var result = document.querySelector("h1")

if(randomNumber1 > randomNumber2) {
    result.innerText = "🚩 Player 1 Wins!"
}

if(randomNumber1 < randomNumber2) {
    result.innerText = "Player 2 Wins! 🚩"
}

if(randomNumber1 == randomNumber2) {
    result.innerText = "Draw!"
}