// // play(computerAction, userAction);
// function playGame() {
//   play(computerAction, userAction);
//   play(computerAction, userAction);
//   play(computerAction, userAction);
//   play(computerAction, userAction);
//   play(computerAction, userAction);
// }
// // playGame();
const rock = document.querySelector(`#rock`);
const paper = document.querySelector(`#paper`);
const scissor = document.querySelector(`#scissor`);
const reset = document.querySelector(`#reset`);
const playerScoreUI = document.querySelector(`.scorePlayer`);
const computerScoreUI = document.querySelector(`.scoreComputer`);

// scoreboard
let playerScore = 0;
playerScoreUI.textContent = playerScore;
let computerScore = 0;
computerScoreUI.textContent = computerScore;

// get computer action
const computerAction = () => {
  const random = Math.floor(Math.random() * 3 + 1);
  let action = '';
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
};

// update UI
const updateUI = () => {
  playerScoreUI.textContent = playerScore;
  computerScoreUI.textContent = computerScore;
};

// play game
const play = (computer, user) => {
  const computerAction = computer();
  const userAction = user.toLowerCase();

  if (computerAction === userAction) {
    playerScore = playerScore;
    computerScore = computerScore;
  } else if (computerAction === `rock` && userAction === `paper`) {
    playerScore++;
  } else if (computerAction === `rock` && userAction === `scissor`) {
    computerScore++;
  } else if (computerAction === `paper` && userAction === `rock`) {
    computerScore++;
  } else if (computerAction === `paper` && userAction === `scissor`) {
    playerScore++;
  } else if (computerAction === `scissor` && userAction === `rock`) {
    playerScore++;
  } else if (computerAction === `scissor` && userAction === `paper`) {
    computerScore++;
  }
};

// rock
rock.addEventListener(`click`, (e) => {
  play(computerAction, e.target.textContent);
  updateUI();
});
// paper
paper.addEventListener(`click`, (e) => {
  play(computerAction, e.target.textContent);
  updateUI();
});
// scissor
scissor.addEventListener(`click`, (e) => {
  play(computerAction, e.target.textContent);
  updateUI();
});
// reset
reset.addEventListener(`click`, () => {
  playerScore = 0;
  computerScore = 0;
  updateUI();
});
