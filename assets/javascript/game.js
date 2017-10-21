var alphabet = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]

var wins = 0
var losses = 0
var guessesLeft = 10
var userPicks = []

document.onkeyup = function(event) {
	var compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(compChoice)
	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (userGuess === alphabet) {
		userPicks.push(userGuess);		
	}

	if (userPicks.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
		userPicks[userPicks.length] = userGuess;
		guessesLeft--
	}

	if (userGuess === compChoice) {
		wins++;
		alert("You guessed right!")
	}

	if (guessesLeft === 0) {
		losses++;
		alert("Sorry, try again!");
	}

	if (userGuess === compChoice || guessesLeft === 0) {
		guessesLeft = 10;
		userPicks = []
	}

	var html =
	"<h1>The Psychic Game</h1>" + 
	"<h2>Guess what letter I'm thinking</h2>" + 
	"<p>Wins: </p>" + wins + 
	"<p>Losses: </p>" + losses + 
	"<p>Guesses Left: </p>" + guessesLeft + 
	"<p>Your Guesses so far: </p>" + userPicks;

	document.querySelector("body").innerHTML = html

}