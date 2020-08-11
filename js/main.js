const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const popup = document.querySelector('.popup');

//Main Function: Play Rock, Paper, Scissor Game
function play(e) {
 restart.style.display = 'inline-block';
 
}


//Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
