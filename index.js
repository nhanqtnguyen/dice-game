var randomNumber1 = Math.floor(Math.random() * 6) + 1;;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;;

var src1 = "dice"+ randomNumber1 +".png";
var src2 = "dice"+ randomNumber2 +".png";


document.querySelector(".dice .img1").setAttribute("src",src1);
document.querySelector(".dice .img2").setAttribute("src",src2);

if(randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = " Player 1 Wins! 🚩"
} 
if(randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins! 🚩"
} 
if(randomNumber1 === randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Draw!"
}