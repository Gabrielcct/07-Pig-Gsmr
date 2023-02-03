"use strict";
//DOM element
//Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//hidde element dice
diceEl.classList.add("hidden");

//Rolling dice functionality
btnRoll.addEventListener("click", function() {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //console.log(dice);

    //2. Dislpay dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //3. Check for rolled 1
    if (dice !== 1) {
        //Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent =
            currentScore;
        //current0El.textContent = currentScore; //CHANGE LATER
    } else {
        //Switch to next player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
    }
});