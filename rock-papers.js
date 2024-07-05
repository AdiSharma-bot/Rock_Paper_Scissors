// Creating the first function for the game

function getComputerChoice() {
  let gameValues = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * gameValues.length); // Gives a random index between 0 and 2;
  const randomValue = gameValues[randomIndex]; // Assigns that index to the array
  return randomValue;
}

// Second function which takes the user's choice and returns it

function getHumanChoice() {
  let userValue = prompt("Type in your choice cunt!");
  if (userValue === null) {
    return "Rock";
  } else {
    return userValue.trim();
  }
}

//Initial values to increment the scores later
let humanScore = 0;
let computerScore = 0;

function playGame() {
  function playRound(humanChoice, computerChoice) {
    // already converted the arguments to lowercase as it is a good practice remember it for future projects
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice == "rock" && computerChoice == "paper") {
      // if the value is converted to lowercase in conditional it must also be compared with a lowercase value
      console.log("You lose! Paper beats Rock");
      return "computer";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("You lose! Scissors beats Paper");
      return "computer";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log("You lose! Rock beats Scissors");
      return "computer";
    } else if (humanChoice == computerChoice) {
      console.log("It's a tie game"); //if the values are same
    } else {
      console.log("You win");
      return "human";
    }
    /* The return approach immediately exits the function so it is good to use it then compare it later */
  }
  for (let i = 1; i <= 5; i++) {
    //to call the function 5 times I had to declare the function inside the loop
    const humanSelection = getHumanChoice(); // here to prompt the user's choice five times
    const computerSelection = getComputerChoice(); //here to return the computer's choice five times
    const result = playRound(humanSelection, computerSelection);

    if (result === "human") {
      /* Increment the scores here i.e later on for a good readable code and it is okay to increment them on conditionals also but this is a more good practice */
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }
    console.log(`Round${i} Human : ${humanScore}
       Computer: ${computerScore}`);
  }

  console.log(
    `Final scores of the game are Human: ${humanScore} and Computer : ${computerScore}`
  );

  if (humanScore > computerScore) {
    console.log("You win human");
  } else if (computerScore > humanScore) {
    console.log(`You loose! Try again by refreshing the page`);
  } else {
    console.log("Its a tie game");
  }
}

playGame();
