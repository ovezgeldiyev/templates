// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var menuClose = document.getElementById("menuClose");
var body = document.body;
let header = document.getElementById("header");
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
};
menuClose.onclick = function () {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  body.classList.remove("active");
  header.classList.remove("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
    header.classList.remove("active");
  }
};
// menu end

// scroll start
function scrollFunc() {
  if (window.pageYOffset >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// faq start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
        currentBtn.parentElement.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
        item.parentElement.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
        item.parentElement.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
      currentBtn.parentElement.classList.add("active");
    }
  });
}
// faq end
// spinbox
let spinWrapper = document.getElementById("spinWrapper");

if (spinWrapper) {
  const spins = document.querySelectorAll(".spin");
  spins.forEach((spin) => {
    let plusButton = spin.querySelector(".plusBtn");
    let minusButton = spin.querySelector(".minusBtn");
    let numberDisplay = spin.querySelector("input");
    let count = 0;

    plusButton.addEventListener("click", function () {
      count++;
      numberDisplay.value = count;
    });

    minusButton.addEventListener("click", function () {
      if (count > 0) {
        count--;
        numberDisplay.value = count;
      }
    });
  });
}
