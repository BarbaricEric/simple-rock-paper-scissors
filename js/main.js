const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const popup = document.querySelector('.popup');

//Main Function: Play Rock, Paper, Scissor Game
function play(e) {
 restart.style.display = 'inline-block';
 
}

// Function: Get Computer Choice 
function getComputerChoice() {

}

//Function: Determine Winner
function getWinner(p,c) {

}

//Clear Popup Window
function clearPopup(e) {
 if(e.target == popup) {
 popup.style.display = 'none';
 }
}

//Restart Game
function

//Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearPopup);
restart.addEventListener('click', restartGame);
