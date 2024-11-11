//Reads the chosen number of dice sides and updates the screen with the resulting roll 
function rollDice() {
    //variable to store selected value
    let sides = document.getElementById('numSides').value;
    let result = getDiceResult(sides); document.getElementById('dice-result').innerText= 'You rolled a ' + result;
}

//Returns a random number between 1 and the given argument
function getDiceResult(max) {
    let result = Math.ceil(Math.random() * max); return result;
}
//Unit tests - testing dice sides from 1 to 100
for (let i = 1; i < 100; i++) {
    let testResult = getDiceResult(i);
    if (testResult > i || testResult < 1) throw Error ("Invalid dice result " + testResult + "for max" + i);
}