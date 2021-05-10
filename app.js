var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")
const actionMessage_p = document.getElementById("action_message")


function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertWord(word) {
	if (word === "rock") return "Rock";
	if (word === "paper") return "Paper";
	return "Scissors";
}

function win(userChoice, computerChoice) {
	userScore ++;
	userScore_span.innerHTML = userScore;
	result_div.innerHTML = `${convertWord(userChoice)} beats ${computerChoice}. You win!`;
	document.getElementById(userChoice).classList.add("green-glow")
	setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 300)
}

function lose(userChoice, computerChoice) {	
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_div.innerHTML = `${convertWord(computerChoice)} beats ${userChoice}. You lose:(`;
	document.getElementById(userChoice).classList.add("red-glow")
	setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 300)
}

function tie(userChoice) {
	result_div.innerHTML = "IT'S A DRAW!"
	document.getElementById(userChoice).classList.add("gray-glow")
	setTimeout(() => document.getElementById(userChoice).classList.remove("gray-glow"), 300)
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			win(userChoice, computerChoice);
			break;
		case "scissorsrock":
		case "rockpaper":
		case "paperscissors":
			lose(userChoice, computerChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			tie(userChoice);
	}
}

function main() {
	rock_div.addEventListener("click", function() {
		game("rock");
	})

	paper_div.addEventListener("click", function() {
		game('paper');
	})

	scissors_div.addEventListener("click", function() {
		game('scissors');
	})
}

main()
