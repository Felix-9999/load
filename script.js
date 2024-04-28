// Get the header element
var header = document.getElementById("main-header");

// Variable to store the previous scroll position
var prevScrollpos = window.pageYOffset;

// Event listener for scroll events
window.onscroll = function() {
  // Get the current scroll position
  var currentScrollPos = window.pageYOffset;

  // If the previous scroll position is greater than the current scroll position, show the header
  if (prevScrollpos > currentScrollPos) {
    header.classList.remove("hidden"); // Show the header
  } else {
    header.classList.add("hidden"); // Hide the header
  }

  // Update the previous scroll position
  prevScrollpos = currentScrollPos;
}
