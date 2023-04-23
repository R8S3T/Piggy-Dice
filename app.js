/// CLONING PIGS AND ANIMATION ///

// Get button to start animation 
const button = document.getElementById('start');
const totalRounds = 3;
let currentPlayerIndex = 0;
let totalRoundsPlayed = 0;

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

  // Check if the game is over
  if (totalRoundsPlayed >= totalRounds * playerNames.length) {
    announceWinner(); // Call the announceWinner function here
    return;
  }

  // Hide Player window after start
  modal.style.display = "none";
  button.disabled = true;

  // If this is the first time the modal is shown, display the player form container
  if (totalRoundsPlayed === 0 && currentPlayerIndex === 0) {
    showPlayerFormContainer();
  }
  // If this is the first round, display the points table container
  if (totalRoundsPlayed === 0) {
    showPointsTableContainer();
  }


  //Pig animation starts here
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
  function cloneOneElement(currentPlayerIndex) {
    fetch('points.html')
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
        let randomIndexBrown = Math.floor(Math.random() * originalPigBrown.length);
        let randomIndexPink = Math.floor(Math.random() * originalPigPink.length);
        let randomPigBrown = originalPigBrown[randomIndexBrown];
        let randomPigPink = originalPigPink[randomIndexPink];

        // Clone the random pigs
        let clonedPigBrown = randomPigBrown.cloneNode(true);
        clonedPigBrown.style.margin = '0 0 0 4em';
        document.querySelector('.mud-two').appendChild(clonedPigBrown);

        let clonedPigPink = randomPigPink.cloneNode(true);
        clonedPigPink.style.margin = '-4em 0 0 16em';
        document.querySelector('.mud-two').appendChild(clonedPigPink);

        // Get the points from points.html
        let brownPoints = parseInt(randomPigBrown.querySelector('.points').textContent);
        let pinkPoints = parseInt(randomPigPink.querySelector('.points').textContent);

        // Update the player's points
        playerNames[currentPlayerIndex].points += brownPoints + pinkPoints;
        playerNames[currentPlayerIndex].roundsPlayed++;
      
        // Update the table with the new points
        let tableBody = document.querySelector("#player-names-table tbody");
        tableBody.innerHTML = ""; // Clear the table body to avoid duplicate entries
      
        for (let player of playerNames) {
          let newRow = tableBody.insertRow();
          newRow.insertCell(0).innerHTML = player.name;
          newRow.insertCell(1).innerHTML = player.points;
        }
        // Make cloned Pigs disappear after 6 seconds
        setTimeout(function() {
          clonedPigBrown.remove();
          clonedPigPink.remove();
        }, 5000);
      })
      .catch(error => console.error('Fetch error:', error));
  }

  // Call the cloneOneElement function after 7 seconds using setTimeout
  setTimeout(() => {
    // Use a closure to pass the correct currentPlayerIndex value
    cloneOneElement(currentPlayerIndex);
  }, 7000);

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

  setTimeout(() => {
    modal.style.display = "block";
    document.getElementById("player-message").innerHTML = `${playerNames[currentPlayerIndex].name}, it's your turn. Press Los geht's to start your round.`;
  }, 5000);

  }, 7300);

  //Splash disappears after 9s
  setTimeout(() => {
    splash.style = "";  
    button.disabled = false;
  }, 9000);

  setTimeout(() => {
    currentPlayerIndex = (currentPlayerIndex + 1) % playerNames.length;
    if (currentPlayerIndex === 0) {
      totalRoundsPlayed++;
    }

    // Check if the game is over after incrementing
    if (totalRoundsPlayed >= totalRounds) {
      setTimeout(() => {
        announceWinner(); // Call the announceWinner function here
      }, 0);
    } else {
      setTimeout(() => {
        modal.style.display = "block";
        document.getElementById("player-message").innerHTML = `${playerNames[currentPlayerIndex].name}, it's your turn. Press Los geht's to start your round.`;
      }, 5000);
    }
  }, 7300);
});



// SCORE BOARD AND PLAYER NAME INPUT ///

function showPlayerFormContainer() {
  document.getElementById("player-form-container").style.display = "block";
  document.getElementById("points-table-container").style.display = "none";
  document.getElementById("winner-container").style.display = "none";
}

function showPointsTableContainer() {
  document.getElementById("player-form-container").style.display = "none";
  document.getElementById("points-table-container").style.display = "block";
  document.getElementById("winner-container").style.display = "none";
}

function showWinnerContainer() {
  document.getElementById("player-form-container").style.display = "none";
  document.getElementById("points-table-container").style.display = "none";
  document.getElementById("winner-container").style.display = "block";
}

// Get the modal
let modal = document.getElementById("myModal");

// Get the form
let form = document.getElementById("player-form");

// Initialize the player names array
let playerNames = [];

// Show modal when page is loaded
window.onload = function () {
    modal.style.display = "block";
};

// Submit form event
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Check if all players have entered their names
    let maxPlayers = 4;
    if (playerNames.length < maxPlayers) {
        // Get the player name
        let playerName = document.getElementById("player-name").value;

        // Add the player name and points to the playerNames array
        playerNames.push({
            name: playerName,
            points: 0,
            roundsPlayed: 0
        });

        // Clear the player name input
        document.getElementById("player-name").value = "";

        let newPlayerText = document.createElement("p");
        newPlayerText.innerHTML = `${playerName}`;
        newPlayerText.style.fontSize = "2em"; 
        newPlayerText.style.marginTop = "1em";
        newPlayerText.style.marginRight = "1em";

        // Add players to appropriate row
        if (playerNames.length <= 2) {
          document.getElementById("player-row-1").appendChild(newPlayerText);
        } else {
          document.getElementById("player-row-2").appendChild(newPlayerText);
        }

        // Show all players added button after first name was entered
        if (playerNames.length === 1) {
          document.getElementById("all-players").style.display = "inline";
        }
    }
});

// All-players-added event
document.getElementById("all-players").addEventListener("click", function () {
  document.getElementById("btn-enter").disabled = true;
  document.getElementById("start").style.display = "inline";
  // Hide the all-players button after clicked and start button appears
  this.style.display = "none"; 
  let firstPlayer = playerNames[0].name;
  document.getElementById("player-message").innerHTML = `${firstPlayer}, press Los geht's to start the game.`;
})

// Start game event
document.getElementById("start").addEventListener("click", function () {
  modal.style.display = "none";
});

function announceWinner() {
  let winner = playerNames[0];
  for (let player of playerNames) {
    if (player.points > winner.points) {
      winner = player;
    }
  }

  const winnerMessage = `The winner is ${winner.name} with ${winner.points} points!`;
  document.getElementById("winner-message").innerHTML = winnerMessage;

  setTimeout(() => {
    modal.style.display = "block";
    showWinnerContainer();
  }, 2000);
}

const restartButton = document.getElementById('restart');

restartButton.addEventListener('click', function() {
  // Reset the game state
  currentPlayerIndex = 0;
  totalRoundsPlayed = 0;
  for (let player of playerNames) {
    player.points = 0;
    player.roundsPlayed = 0;
  }

  // Update the table with the reset points
  let tableBody = document.querySelector("#player-names-table tbody");
  tableBody.innerHTML = ""; // Clear the table body to avoid duplicate entries

  for (let player of playerNames) {
    let newRow = tableBody.insertRow();
    newRow.insertCell(0).innerHTML = player.name;
    newRow.insertCell(1).innerHTML = player.points;
  }

  // Hide the restart button and show the start button
  restartButton.style.display = "none";
  button.style.display = "inline";
  button.disabled = false;

  // Reset the player message
  document.getElementById("player-message").innerHTML = `${playerNames[currentPlayerIndex].name}, it's your turn. Press Los geht's to start your round.`;
});
