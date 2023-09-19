'use strict';

const select = document.querySelector('.js-select');
const btnPlay = document.querySelector('.js-btn');
const btnMessage = document.querySelector('.js-btnMessage');


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

function randomNumber() { 
    const randomNumbers = getRandomNumber (10);
    return randomNumbers; 
}


function changePlay() {
    const valuePlay = select.value;
    const computerPlay = randomNumber(); 
    console.log (computerPlay, valuePlay); 
    if (valuePlay === "Piedra") {
        if(computerPlay <= 3) {
            btnMessage.innerHTML = 'Empate';   
        }else if (computerPlay >=7){
            btnMessage.innerHTML = 'Has perdido!';  
        }else {
            btnMessage.innerHTML = 'Has ganado!';
        }
    } else if (valuePlay === "Papel"){
        if(computerPlay <= 3) {
            btnMessage.innerHTML = 'Has ganado!';   
        } else if (computerPlay >= 7){
            btnMessage.innerHTML = 'Empate';  
        } else {
            btnMessage.innerHTML = 'Has perdido!';
        }
    } else if (valuePlay === "Tijera"){
        if(computerPlay <= 3) {
            btnMessage.innerHTML = 'Has perdido!';   
        }else if (computerPlay >= 7){
            btnMessage.innerHTML = 'Has ganado!';  
        }else {
            btnMessage.innerHTML = 'Empate';
        }
    }
}

function handleClickPlay(event) {
    event.preventDefault();
    changePlay();
}


btnPlay.addEventListener('click', handleClickPlay); 
