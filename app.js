//*****Pig combination for Points*****


// Standing Pigs
let brownPig = document.querySelector('.pig-two');
let standing = document.querySelector('.column-stand');

let copyBrown = brownPig.cloneNode(true);
copyBrown.style.transform = "scale(40%)";

standing.appendChild(copyBrown);






/* // Nose down Pig
let diveBrown = document.querySelector('.pig-three');
let divePink = document.querySelector('.pig-four');
let dive = document.querySelector('.dive');

diveBrown.style.transform = "scale(40%)";
dive.appendChild(diveBrown.cloneNode(true));

divePink.style.transform = "scale(40%)";
dive.appendChild(divePink.cloneNode(true)); */

// Points fo both standing





// Points for one pig on nose




/* Get button to start animation */
const button = document.getElementById('start');

/* Select elements to animate */

const go = document.querySelector('.go');
const goTwo = document.querySelector('.go-two');
const pigThree = document.querySelector('.pig-three');
const pigFour = document.querySelector('.pig-four');
const earLeftBrown = document.querySelector('.ear-left-three');
const earLeftPink = document.querySelector('.ear-left-four');
const earRightBrown = document.querySelector('.ear-right-three');
const earRightPink = document.querySelector('.ear-right-four');
const legLeftBrown = document.querySelector('.leg-left-three');
const legLeftPink = document.querySelector('.leg-left-four');
const legRightBrown = document.querySelector('.leg-right-three');
const legRightPink = document.querySelector('.leg-right-four');
const splash = document.querySelector('.splash')

/* Add eventlistener to start animation and animation itself */

button.addEventListener('click', function(e) {
  e.preventDefault();
  e.target.classList.remove('animation');
  go.style.animation = "move 7.4s linear";
  goTwo.style.animation = "move-two 7.4s linear 0.3s";
  pigThree.style.animation = "bounce 0.5s 0s 10, jump 3.5s 4.5s 1";
  pigFour.style.animation = "bounce-two 0.5s 0s 10, jump-two 3.5s 4.5s 1";
  earLeftBrown.style.animation = "running-ear-left 0.5s 10";
  earLeftPink.style.animation = "running-ear-left 0.5s 10";
  earRightBrown.style.animation = "running-ear-right 0.5s 10";
  earRightPink.style.animation = "running-ear-right 0.5s 10";
  legLeftBrown.style.animation = "run-left 0.5s 10";
  legLeftPink.style.animation = "run-left 0.5s 10";
  legRightBrown.style.animation = "run-right 0.5s 10";
  legRightPink.style.animation = "run-right 0.5s 10";
  splash.style.animation = "fadeInOut 2.5s 7s";
});


