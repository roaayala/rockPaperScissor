const rock = document.querySelector(`#rock`);
const paper = document.querySelector(`#paper`);
const scissor = document.querySelector(`#scissor`);
const reset = document.querySelector(`#reset`);
const playerScoreUI = document.querySelector(`.scorePlayer`);
const computerScoreUI = document.querySelector(`.scoreComputer`);
const roundNotification = document.querySelector(`.round-notification`);

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

  if (playerScore === 5) {
    roundNotification.textContent = 'Player win the game!';
  } else if (computerScore === 5) {
    roundNotification.textContent = 'Computer win the game!';
  } else {
    if (computerAction === userAction) {
      playerScore = playerScore;
      computerScore = computerScore;
      roundNotification.textContent = 'draw';
    } else if (computerAction === `rock` && userAction === `paper`) {
      playerScore++;
      roundNotification.textContent = 'Player won!';
    } else if (computerAction === `rock` && userAction === `scissor`) {
      computerScore++;
      roundNotification.textContent = 'Computer won!';
    } else if (computerAction === `paper` && userAction === `rock`) {
      computerScore++;
      roundNotification.textContent = 'Computer won!';
    } else if (computerAction === `paper` && userAction === `scissor`) {
      playerScore++;
      roundNotification.textContent = 'Player won!';
    } else if (computerAction === `scissor` && userAction === `rock`) {
      playerScore++;
      roundNotification.textContent = 'Player won!';
    } else if (computerAction === `scissor` && userAction === `paper`) {
      computerScore++;
      roundNotification.textContent = 'Computer won!';
    }
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
  roundNotification.textContent = '';
});
