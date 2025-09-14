let hScore = 0;
let gScore = 0;
let homeScore = document.getElementById("score-home")
let guestScore = document.getElementById("score-guest")

function plusOne(){
    hScore+=1
    homeScore.textContent = hScore
}
function plusTwo(){
    hScore+=2
    homeScore.textContent=hScore
}
function plusThree(){
    hScore+=3
    homeScore.textContent=hScore
}


function plusOneGuest(){
    gScore+=1
    guestScore.textContent = gScore
}
function plusTwoGuest(){
    gScore+=2
    guestScore.textContent=gScore
}
function plusThreeGuest(){
    gScore+=3
    guestScore.textContent=gScore
}