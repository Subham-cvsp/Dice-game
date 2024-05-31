let randomNum=Math.floor(Math.random()*6)+1;
let randomNum2=Math.floor(Math.random()*6)+1;
// string interpolation used in the below code:
document.querySelector(".img1").setAttribute("src",`images/dice${randomNum}.png`);
document.querySelector(".img2").setAttribute("src",`images/dice${randomNum2}.png`);

if(randomNum > randomNum2)
{
    document.querySelector("h1").innerHTML= "🚩Player 1 Wins";
}
else if(randomNum < randomNum2)
{
    document.querySelector("h1").innerHTML= "Player 2 Wins 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}


