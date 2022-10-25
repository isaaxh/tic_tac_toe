"use strict";
const modalContainer = document.querySelector('#modal-container');
const optionCPU = document.querySelector('[data-option="cpu"]');
const optionPlayer = document.querySelector('[data-option="player"]');
const opponentTag = document.querySelector('[data-tag="opponent"]');
const markerXBtn = document.querySelector('[data-marker="x"]');
const markerOBtn = document.querySelector('[data-marker="o"]');
const playerScore = document.querySelector('[data-score="player"]');
const opponentScore = document.querySelector('[data-score="opponent"]');

let selectedMarker = null;
let selectedOpponent = null;
console.log(playerScore.textContent);
console.log(opponentScore.textContent);

function selectPlayerMarker(e) {
    console.log(e);   
    selectedMarker = 'X';
    console.log(e.target);
    e.target.classList.remove("active");
    e.target.classList.add("active");
}


// function() {
//     selectedMarker = 'X';
//     console.log(this);
//     this.classList.remove("active");
//     this.classList.add("active");
// }

markerXBtn.addEventListener('click',selectPlayerMarker());

markerOBtn.addEventListener('click', () => { 
    selectMarker = 'O';
    markerXBtn.classList.remove("active");
    markerOBtn.classList.add("active");
    console.log(selectMarker);
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

const createPlayer = () => {

}