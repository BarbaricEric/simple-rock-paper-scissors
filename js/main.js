const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const popup = document.querySelector('.popup');
const BROSWERSUPPORT = document.querySelector('.banner-support');
const scoreboard = {
 player: 0,
 computer:0
}

//Browser Support Banner
setTimeout(() => {BROSWERSUPPORT.style.display = 'none'}, 5.0*1000);

//Main Function: Play Rock, Paper, Scissor Game
function play(e) {
  restart.style.display = 'inline-block';
 const playerChoice = e.target.id;
 const computerChoice = getComputerChoice();
 const winner = getWinner(playerChoice, computerChoice);
 showWinner(winner, computerChoice);
}

// Function: Get Computer Choice 
function getComputerChoice() {

}

//Function: Determine Winner
function getWinner(p,c) {

}

//Function: Scoreboard 
function showWinner(winner, computerChoice) {

}

//Clear Popup Window
function clearPopup(e) {
 if(e.target == popup) {
 popup.style.display = 'none';
 }
}

//Restart Game
function restartGame() {
 scoreboard.player = 0;
 scoreboard.computer = 0;
 score.innerHTML = `
 <p>Player: 0</p>
 <p>Computer: 0</p>
 `;
} 

//Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearPopup);
restart.addEventListener('click', restartGame);
