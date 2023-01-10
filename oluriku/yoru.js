const prodt = document.querySelector(".product");
const drops = document.querySelector(".footer2");
prodt.addEventListener("click", function () {
  drops.classList.toggle("show");
});

const burger = document.querySelector(".hamBurger");
const menu = document.querySelector(".menuBar");
const minimize = document.querySelector(".crossX");

burger.addEventListener("click", function () {
  menu.classList.add("show");
});

minimize.addEventListener("click", function () {
  menu.classList.remove("show");
});
