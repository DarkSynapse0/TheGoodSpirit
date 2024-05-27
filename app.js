const playerList = document.getElementById('players');
const addPlayerButton = document.getElementById('add-player');
const rollDiceButton = document.getElementById('roll-dice');
const gameResult = document.getElementById('game-result');

let players = [];
let currentPlayer = 0;

addPlayerButton.addEventListener('click', () => {
  const playerName = prompt('Enter player name:');
  if (playerName) {
    players.push({ name: playerName, score: 0 });
    updatePlayerList();
  }
});

function updatePlayerList() {
  playerList.innerHTML = '';
  players.forEach((player, index) => {
    const playerElement = document.createElement('div');
    playerElement.classList.add('flex', 'justify-between', 'items-center', 'mb-2');
    playerElement.innerHTML = `
      <span class="font-bold">${player.name}</span>
      <span>Score: ${player.score}</span>
    `;
    playerList.appendChild(playerElement);
  });
  if (players.length > 1) {
    rollDiceButton.disabled = false;
  }
}

rollDiceButton.addEventListener('click', () => {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  players[currentPlayer].score += diceRoll;
  gameResult.textContent = `${players[currentPlayer].name} rolled a ${diceRoll}`;
  checkWinner();
  currentPlayer = (currentPlayer + 1) % players.length;
  updatePlayerList();
});

function checkWinner() {
  const winningScore = 10; // You can adjust the winning score here
  const winner = players.find(player => player.score >= winningScore);
  if (winner) {
    gameResult.textContent = `${winner.name} wins!`;
    rollDiceButton.disabled = true;
  }
}
