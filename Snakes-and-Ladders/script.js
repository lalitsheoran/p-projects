var count = 0; // initiating counter for sum of random value

function playerName() { //Entering player name//
    var player1 = prompt("Please enter Player name:", "Your Name");
    if (player1 == "" || player1 == "Your Name" || player1 == " ") {
        player1 = "Lazy player" //if player leaves name field empty or doesnt enter name, then he is a lazy player
    } else {
        player1 = player1
    }
    document.getElementById("selectPlayer1").innerHTML = player1;

}

function rollDice() {
    var randomNum = Math.floor(Math.random() * (6) + 1); //generating random number for dice
    var tBoxes = document.getElementsByTagName("td");
    var diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got : " + randomNum //displaying random number
    var dicePic = document.getElementById("picDice"); // changing dice face according to random number
    if (randomNum == 1) {
        dicePic.setAttribute("src", "resources/1.jpg")
    }
    if (randomNum == 2) {
        dicePic.setAttribute("src", "resources/2.jpg")
    }
    if (randomNum == 3) {
        dicePic.setAttribute("src", "resources/3.jpg")
    }
    if (randomNum == 4) {
        dicePic.setAttribute("src", "resources/4.jpg")
    }
    if (randomNum == 5) {
        dicePic.setAttribute("src", "resources/5.jpg")
    }
    if (randomNum == 6) {
        dicePic.setAttribute("src", "resources/6.jpg")
    }

    var len = tBoxes.length;
    count += randomNum; //adding random number to get actual postion on board
    if (count > 100) {
        count = count - randomNum //restricting sum to 100
    }
    else if (count == 6) {
        diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got a ladder"
        count = 48
    }
    else if (count == 11) {
        diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got a ladder"

        count = 90
    }
    else if (count == 19) {
        diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got a ladder"
        count = 39
    }
    else if (count == 37) {
        diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got bitten by a snake"
        count = 13
    }
    else if (count == 44) {
        diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got a ladder"
        count = 85
    }
    else if (count == 52) {
        diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got bitten by a snake"
        count = 29
    }
    else if (count == 61) {
        diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got bitten by a snake"
        count = 4
    }
    else if (count == 89) {
        diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got bitten by a snake"
        count = 47
    }
    else if (count == 99) {
        diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got bitten by the largest snake"
        count = 14
    }
    for (i = 0; i < len; i++) { // showing player location on board
        var tNum = tBoxes[i].textContent
        tNum = Number(tNum)
        if (tNum == count) {
            tBoxes[i].style.backgroundImage = "url('resources/1piece.png')";
        } else {
            tBoxes[i].style.backgroundImage = "url('')"
        }
    }
    if (count == 100) {
        pName = document.getElementById("selectPlayer1").textContent
        alert("Congratulations " + pName + ", You have won") //alert message after winning
        count = 0; // resetting counter after winning

    }
}