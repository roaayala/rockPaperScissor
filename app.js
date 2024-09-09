// random number to represent computer action
function computerAction() {
  const random = Math.floor(Math.random() * 3 + 1);
  let action;
  switch (random) {
    case 1:
      action = `rock`;
      break;
    case 2:
      action = `paper`;
      break;
    case 3:
      action = `scissor`;
      break;
  }
  return action;
}

// user action from prompt
function userAction() {
  let action = prompt(`choose action`).toLowerCase();
  return action;
}

// score
let computerScore = 0;
let humanScore = 0;

function play(computer, user) {
  const computerAction = computer();
  const userAction = user();
  console.log(computerAction, userAction);
  if (computerAction === userAction) {
    console.log(`draw`);
  } else if (computerAction === `rock` && userAction === `paper`) {
    console.log(`computer lose and user won`);
    humanScore++;
    console.log(computerScore, humanScore);
  } else if (computerAction === `rock` && userAction === `scissor`) {
    console.log(`computer won and user lose`);
    computerScore++;
    console.log(computerScore, humanScore);
  } else if (computerAction === `paper` && userAction === `rock`) {
    console.log(`computer won and user lose`);
    computerScore++;
    console.log(computerScore, humanScore);
  } else if (computerAction === `paper` && userAction === `scissor`) {
    console.log(`computer lose and user won`);
    humanScore++;
    console.log(computerScore, humanScore);
  } else if (computerAction === `scissor` && userAction === `rock`) {
    console.log(`computer lose and user won`);
    humanScore++;
    console.log(computerScore, humanScore);
  } else if (computerAction === `scissor` && userAction === `paper`) {
    console.log(`computer won and user lose`);
    computerScore++;
    console.log(computerScore, humanScore);
  } else {
    console.log(`please enter rock, paper or scissor`);
  }
}

// play(computerAction, userAction);
function playGame() {
  play(computerAction, userAction);
  play(computerAction, userAction);
  play(computerAction, userAction);
  play(computerAction, userAction);
  play(computerAction, userAction);
}
playGame();
