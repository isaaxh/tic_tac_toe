

// create an factory function for player
    
// create a module for containing the game board

// a module to start the game 








"use strict";
const modalContainer = document.querySelector('#modal-container');
const optionCPU = document.querySelector('[data-option="cpu"]');
const optionPlayer = document.querySelector('[data-option="player"]');
const markerXBtn = document.querySelector('[data-marker="x"]');
const markerOBtn = document.querySelector('[data-marker="o"]');
const playerScore = document.querySelector('[data-score="player"]');
const opponentScore = document.querySelector('[data-score="opponent"]');





let playerMarker = undefined;
let cpuMarker = undefined;
let selectedOpponent = undefined;
console.log(playerScore.textContent);
console.log(opponentScore.textContent);


markerXBtn.addEventListener('click', () =>{
    playerMarker = 'X';
    markerOBtn.classList.remove("active");
    markerXBtn.classList.add("active");
    console.log(playerMarker);
});

markerOBtn.addEventListener('click', () => { 
    playerMarker = 'O';
    markerXBtn.classList.remove("active");
    markerOBtn.classList.add("active");
    console.log(playerMarker);
});

optionCPU.addEventListener('click', () => {
    selectedOpponent = 'CPU';
    opponentTag.textContent = 'memory';
    modalContainer.style.display = 'none';
});

optionPlayer.addEventListener('click', () => {
    selectedOpponent = 'player';
    opponentTag.textContent = 'person';
    modalContainer.style.display = 'none';
});


const createPlayer = (name, sideID, type) {    
    let playerName = name;
    const playerSide = document.querySelector(`#${sideID}`);
    
    const opponentTag = document.querySelector('[data-tag="opponent"]');
    type === 'player' ? opponentTag.textContent = 'person': opponentTag.textContent = 'memory';

    const PLAYER_SCORE = document.querySelector('.score');
    
}