// Look for .hamburger
const hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", () => {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});