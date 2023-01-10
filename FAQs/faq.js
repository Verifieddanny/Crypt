const faqMain = Array.from(document.querySelectorAll(".faqMain"));
const faqDrops = Array.from(document.querySelectorAll(".dropdownFAQ"));

const answer = Array.from(document.querySelectorAll(".answer"));
const answerMap12 = answer.map((main) => main.textContent);
const answerMap1 = answer.map((mains, i, arr) => {
  console.log(arr);
});
const answerMap = answer.map((mains, i, arr) => {
  console.log(arr);
  mains.textContent = "";
  console.log(arr);
});
faqMain.forEach((mains, i, arr) => {
  mains.addEventListener("click", function () {
    if (!answer[i].classList.contains("show")) {
      answer[i].textContent = answerMap12[i];
    } else {
      answer[i].textContent = "";
    }
    faqDrops[i].classList.toggle("turn");
    answer[i].classList.toggle("show");
  });
});

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
