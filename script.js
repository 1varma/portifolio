function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let scrollableElement = document.getElementById("innerProjects");

scrollableElement.addEventListener("mouseenter", function() {
  this.style.overflowX = "hidden";
});

scrollableElement.addEventListener("mouseleave", function() {
  this.style.overflowX = "auto";
});

scrollableElement.addEventListener("wheel", function(event) {
  if (this.clientWidth < this.scrollWidth) {
    this.scrollLeft += event.deltaY;
    event.preventDefault();
  }
});
