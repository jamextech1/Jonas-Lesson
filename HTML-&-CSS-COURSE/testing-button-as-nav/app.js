const btnEl = document.querySelector(".hamburger");
const navEl = document.querySelector("nav");
btnEl.addEventListener("click", function () {
  navEl.classList.toggle("open");
});
