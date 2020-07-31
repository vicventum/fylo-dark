// Look for .hamburger
const hamburger = document.getElementById("iconHamburger"),
  header = document.getElementById('header')
// On click
hamburger.addEventListener("click", () => {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  header.classList.toggle("open");
});