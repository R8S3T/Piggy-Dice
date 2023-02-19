
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
  

// Function to fetch content from instructions.html and clone pigs into game.html
function cloneOneElement() {
  fetch('instructions.html')
    .then(response => response.text())
    .then(data => {
      var parser = new DOMParser();
      var doc = parser.parseFromString(data, "text/html");

      // Select the elements to be cloned from the fetched HTML content
      var originalPigBrown = doc.querySelectorAll('.col-3-brown');
      var originalPigPink = doc.querySelectorAll('.col-3-pink');

      // Convert the NodeList to an array so we can use the array methods
      originalPigBrown = Array.from(originalPigBrown);
      originalPigPink = Array.from(originalPigPink);

      // Choose a random pig from the array of original pigs
      var randomIndexBrown = Math.floor(Math.random() * originalPigBrown.length);
      var randomIndexPink = Math.floor(Math.random() * originalPigPink.length);
      var randomPigBrown = originalPigBrown[randomIndexBrown];
      var randomPigPink = originalPigPink[randomIndexPink];

      // Clone the random pigs
      var clonedPigBrown = randomPigBrown.cloneNode(true);
      clonedPigBrown.style.margin = '-1em 0 0 8em';
      document.querySelector('.mud-two').appendChild(clonedPigBrown);

      var clonedPigPink = randomPigPink.cloneNode(true);
      clonedPigPink.style.margin = '-8em 0 0 16em';
      document.querySelector('.mud-two').appendChild(clonedPigPink);

      // Make cloned Pigs disappear after 3 seconds
      setTimeout(function() {
        clonedPigBrown.remove();
        clonedPigPink.remove();
      }, 6000);
    })
    .catch(error => console.error('Fetch error:', error));
}

// Call the cloneOneElement function after 7 seconds using setTimeout
setTimeout(cloneOneElement, 7300);

// make running pigs disappear after animation finished
  setTimeout(() => {
    gamePigBrown.style.visibility = 'hidden';
    gamePigPink.style.visibility = 'hidden';
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

// Score board and input for player names
// Get the modal
var modal = document.getElementById("myModal");

// Get the form
var form = document.getElementById("player-form");

// Get the close button
var closeButton = document.getElementsByClassName("close")[0];

// Get the player names container
var playerNamesContainer = document.getElementById("player-names");

// Open the modal on page load
window.onload = function() {
  modal.style.display = "block";
}

// Submit form event
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the player name
  var playerName = document.getElementById("player-name").value;

  // Add the player name to the player names container
  playerNamesContainer.innerHTML += "<p>" + playerName + "</p>";

  // Clear the player name input
  document.getElementById("player-name").value = "";
});

// Close the modal when the close button is clicked
closeButton.addEventListener("click", function() {
  modal.style.display = "none";
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

