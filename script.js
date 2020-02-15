const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

// set first img opacity
imgs[0].style.opacity = opacity;

// loop through each img and add event listener onto each img

// once the img is clicked (listens for click event) assigns the current src attribute to current to be the target of the click, sort of understand the purpose of the target event?

// function is replacing the src img on line 12. once img is clicked it loops through the array of imgs and places it's src attr to the current main-img

// target const imgs use forEach array method to attach a addEventListener to each img which listens for a click and assigns the current src attr to the clicked target which is why you need an event / event.target

imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
  // reset opacity
  imgs.forEach(img => (img.style.opacity = 1));

  // add fade in class for animation
  current.classList.add("fade-in");

  // remove fade in class after .5s
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // change current img to src of clicked img
  current.src = e.target.src;

  // change opacity to opacity var
  e.target.style.opacity = opacity;
}
