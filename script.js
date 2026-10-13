// Rock Paper Scissors game.

function getComputerChoice() {
  const computerNum = Math.floor(Math.random() * 3);

  switch (computerNum) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function getHumanChoice() {
  let humanStr = prompt("Input your choice (Rock/Paper/Scissors).");
  humanStr = humanStr[0].toUpperCase() + humanStr.slice(1).toLowerCase();
  return humanStr;
}


function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  
  function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    console.log("Draw!")
  }
    else if ((computerChoice === 'Rock' && humanChoice === 'Paper') ||
             (computerChoice === 'Paper' && humanChoice === 'Scissors') ||
             (computerChoice === 'Scissors' && humanChoice === 'Rock')) {
      console.log('You win!');
      humanScore += 1;
    } else {
      console.log("You Lose!");
      computerScore += 1;
    }
  }

  for (let round = 1; round <= 5; round++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    console.log("Round: " + round);
    console.log("My choice is: " + computerSelection);
    console.log("Your choice is: " + humanSelection);

      playRound(computerSelection, humanSelection);
  }
    
  if (computerScore > humanScore) {
    console.log('Game over! You lose! Try again.');
  } else if (computerScore < humanScore) {
    console.log('Congratulations! You won the game!');
  } else {
    console.log('Game over! Round Draw! Try again.');
  }
  }

// Type "playGame()" and press Enter. then type 'Rock', 'Paper' or 'Scissors' when prompted to play the game.