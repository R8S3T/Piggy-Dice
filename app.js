
// Get button to start animation 
const button = document.getElementById('start');

// Select elements to animate 
const gamePigBrown = document.getElementById('gamePigBrown')
const gamePigPink = document.getElementById('gamePigPink')
const goBrown = document.querySelector('.go-brown-ani');
const goPink = document.querySelector('.go-pink-ani');
const pigBrown = document.querySelector('.body-brown-ani');
const pigPink = document.querySelector('.body-pink-ani');
const earLeftBrown = document.querySelector('.ear-left-brown-ani');
const earLeftPink = document.querySelector('.ear-left-pink-ani');
const earRightBrown = document.querySelector('.ear-right-brown-ani');
const earRightPink = document.querySelector('.ear-right-pink-ani');
const legLeftBrown = document.querySelector('.leg-back-brown-ani');
const legLeftPink = document.querySelector('.leg-back-pink-ani');
const legRightBrown = document.querySelector('.leg-front-brown-ani');
const legRightPink = document.querySelector('.leg-front-pink-ani');
const splash = document.querySelector('.splash')


// Select elements for points
const pig0 = document.querySelector('#pig0');
const pig1 = document.querySelector('#pig1');
const pig2 = document.querySelector('#pig2');
const pig3 = document.querySelector('#pig3');
const pig4 = document.querySelector('#pig4');
const pig5 = document.querySelector('#pig5');
const pig6 = document.querySelector('#pig6');
const pig7 = document.querySelector('#pig7');


// List of pig points (pink and brown)
const pointsBrownPig = [pig0, pig1, pig2, pig3];
const pointsPinkPig = [pig4, pig5, pig6, pig7];

//Random choice from both lists
let randomBrownPig = Math.floor(Math.random() *4);
let randomPinkPig = Math.floor(Math.random() *4);


// Start animation on button click
button.addEventListener('click', function(e) {
  e.preventDefault();

  button.disabled = true;
  e.target.classList.remove('animation');
  gamePigBrown.style.visibility = "visible";
  gamePigPink.style.visibility = "visible";
  goBrown.style.animation = "move 7.3s linear";
  goPink.style.animation = "move-two 7.3s linear 0.3s";
  pigBrown.style.animation = "bounce 0.5s 0s 9, jump 3.2s 4.2s 1";
  pigPink.style.animation = "bounce-two 0.5s 0s 9, jump-two 3.2s 4.2s 1";
  earLeftBrown.style.animation = "running-ear-left 0.5s 10";
  earLeftPink.style.animation = "running-ear-left 0.5s 10";
  earRightBrown.style.animation = "running-ear-right 0.5s 10";
  earRightPink.style.animation = "running-ear-right 0.5s 10";
  legLeftBrown.style.animation = "run-left 0.5s 10";
  legLeftPink.style.animation = "run-left 0.5s 10";
  legRightBrown.style.animation = "run-right 0.5s 10";
  legRightPink.style.animation = "run-right 0.5s 10";
  splash.style.animation = "fadeInOut 4.2s 6.8s";
  
  //Create clone from random choice
let randomCloneBrown = pointsBrownPig[randomBrownPig].cloneNode(true);
randomCloneBrown.style.margin = '-3em 0 0 0';

let randomClonePink = pointsPinkPig[randomPinkPig].cloneNode(true);
randomClonePink.style.margin = '-13em 50em 0 2em';

const mudOne= document.querySelector('.mud-one');
const parentOne = mudOne.parentNode;

//Make cloned pigs appear after 7s
setTimeout(() => {
  parentOne.replaceChild(randomCloneBrown, mudOne);
  randomCloneBrown.appendChild(randomClonePink);
  randomCloneBrown.style.visibility = 'hidden';
}, 7000);

// make running pigs disappear after animation finished
  setTimeout(() => {
    gamePigBrown.style.visibility = 'hidden';
    gamePigPink.style.visibility = 'hidden';
    randomCloneBrown.style.visibility = '';
    goBrown.style = "";
    goPink.style = "";
    pigBrown.style = "";
    pigPink.style = "";
    earLeftBrown.style = "";
    earLeftPink.style = "";
    earRightBrown.style = "";
    earRightPink.style = "";
    legLeftBrown.style = "";
    legLeftPink.style = "";
    legRightBrown.style = "";
    legRightPink.style = "";

  }, 7300);

  //Splash disappears after 9s
  setTimeout(() => {
    splash.style = "";  
    button.disabled = false;

  }, 9000);

  //Button  enabled until 12s after start
  setTimeout(() => {

  }, 12000);
});


//use display none to make combinations visibilbe after splash in puddle


alert(randomBrownPig)
/*i = random möglichkeit */
/* const i = Math.floor(Math.random() * 6); */
/*wendet i in array an */
/* const e = a[i];

const j = Math.floor(Math.random() * 6);

const sum = i + 1 + j + 1;

p.innerHTML = "Du hast " + sum + " Punkte";

e.style.dispaly = "block"
 */

/* Add eventlistener to start animation and animation itself */
//*****Pig combination for Points*****




// Standing Pigs
/* let brownPig = document.querySelector('.pig-two');
let standing = document.querySelector('.column-stand');

let copyBrown = brownPig.cloneNode(true);
copyBrown.style.transform = "scale(40%)";

standing.appendChild(copyBrown); */

