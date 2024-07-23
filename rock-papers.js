const roundScores = document.querySelector('.round-scores');
const roundResult = document.querySelector('.round-result');
const finalScores = document.querySelector('.final-scores');
const finalResult = document.querySelector('.final-result');

function getComputerChoice() {
  let gameValues = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * gameValues.length); // Gives a random index between 0 and 2;
  const randomValue = gameValues[randomIndex]; //Assigns that index to the array
  return randomValue;
}

function playRound(humanChoice, computerChoice) {
  // already converted the arguments to lowercase as it is a good practice remember it for future projects
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (humanChoice == "rock" && computerChoice == "paper") {
    // if the value is converted to lowercase in conditional it must also be compared with a lowercase value
    roundScores.textContent = "You lose! Paper beats Rock";
    return "computer";
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    roundScores.textContent ="You lose! Scissors beats Paper";
    return "computer";
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    roundScores.textContent = "You lose! Rock beats Scissors";
    return "computer";
  } else if (humanChoice == computerChoice) {
    roundScores.textContent = "It's a tie game"; // if the values are same
  } else {
    roundScores.textContent = "You win";
    return "human";
  }
}

//Initial values to increment the scores later
let humanScore = 0;
let computerScore = 0;
let roundPlayed = 0; // set this variable to increment in=t later

function handleGame(event) {
  let humanSelection; 
  const target = event.target.id; //to access the id of the element

  switch (target) { //Add the value to the humanSelection variable based on the click on the buttons and used event bubbling here
    case "rock":
      humanSelection = "rock";
      break;
    case "paper":
      humanSelection = "paper";
      break;
    case "scissors":
      humanSelection = "scissors";
      break;
    default:
      return; //Ignore clicks outside the function
  }

  const computerSelection = getComputerChoice(); 
  const result = playRound(humanSelection, computerSelection);

  if (result === "human") {
    /* Increment the scores here i.e later on for a good readable code and it is okay to increment them on conditionals also but this is a more good practice */
    humanScore++;
  } else if (result === "computer") {
    computerScore++;
  }
  roundPlayed++;
  roundResult.textContent = `Round${roundPlayed} => Human: ${humanScore}
          Computer: ${computerScore}`;
  if (roundPlayed === 5) { // to play the round five times we used a conditional statement
    btn.removeEventListener("click", handleGame); // rounds are over Event Listener is removed
    displayResults(); 
  }
}

function displayResults() { //to display the final results after all five rounds are ended
  finalScores.textContent = 
    `Final scores of the game are Human: ${humanScore} and Computer : ${computerScore}`;

  if (humanScore > computerScore) {
    finalResult.textContent = "You win human";
  } else if (computerScore > humanScore) {
    finalResult.textContent = `You loose! Try again by refreshing the page`;
  } else {
    finalResult.textContent = "Its a tie game";
  }
}
const btn = document.querySelector(".container");
btn.addEventListener("click", handleGame); //first click is run and then handleGame function is run
