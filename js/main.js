'use strict';

const select = document.querySelector('.js-select');
const btnPlay = document.querySelector('.js-btn');
const btnMessage = document.querySelector('.js-btnMessage');


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  function gamePC () {
    const randomNumbers = getRandomNumber (9);
    let valuePc = '';
    if (randomNumbers <= 3) {
        valuePc = 'Piedra'
    } else if (randomNumbers > 3 && randomNumbers < 7){
        valuePc = 'Tijera'
    }else {
        valuePc = 'Papel'
    }
    return valuePc;
}

function changePlayer() {
    const userPlay = select.value;
    const computerPlay = gamePC(); 
    console.log('ordenador ' + computerPlay);
    console.log('usuaria ' + userPlay);
    if (userPlay === "Piedra") {
        if(computerPlay === "Piedra") {
            btnMessage.innerHTML = 'Empate';   
        }else if (computerPlay === "Papel"){
            btnMessage.innerHTML = 'Has perdido!';  
        }else {
            btnMessage.innerHTML = 'Has ganado!';
        }
    } else if (userPlay === "Papel"){
        if(computerPlay === "Piedra") {
            btnMessage.innerHTML = 'Has ganado!';   
        } else if (computerPlay === "Papel"){
            btnMessage.innerHTML = 'Empate';  
        } else {
            btnMessage.innerHTML = 'Has perdido!';
        }
    } else if (userPlay === "Tijera"){
        if(computerPlay === "Piedra") {
            btnMessage.innerHTML = 'Has perdido!';   
        }else if (computerPlay === "Papel"){
            btnMessage.innerHTML = 'Has ganado!';  
        }else {
            btnMessage.innerHTML = 'Empate';
        }
    }
}

function handleClickPlay(event) {
    event.preventDefault();
    changePlayer();
}


btnPlay.addEventListener('click', handleClickPlay); 
