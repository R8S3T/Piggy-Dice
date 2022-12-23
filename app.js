//Pig combination for Points

// Get the element
let original = document.getElementById('pigs');
let destination = document.querySelector('#standing');


// Create a copy of it
let clone = original.cloneNode(true);

// Update the ID and add a class
clone.id = 'elem2';
clone.style.position = "relative";
clone.style.transform = "scale(40%)";


// Inject it into the DOM

destination.appendChild(clone);
destination.classList.add("color");


