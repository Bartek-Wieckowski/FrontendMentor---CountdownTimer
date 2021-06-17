const countDay = document.querySelector(".count__days");
const countHour = document.querySelector(".count__hours");
const countMin = document.querySelector(".count__minutes");
const countSec = document.querySelector(".count__seconds");

// Set the date we're counting down
let countDownDate = new Date("Jul 1, 2022 15:37:25").getTime();
const timer = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = String(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  // Display the result in the html element
  countDay.textContent = `${days}`;
  countHour.textContent = `${hours}`;
  countMin.textContent = `${minutes}`;
  countSec.textContent = `${seconds}`;

  // If the count down is finished, stop and message
  if (distance < 0) {
    clearInterval(timer);
    alert(`Let's get started!`);
    document.body.style.opacity = 0;
  }
}, 1000);

// Speed up counter for see the effect
const btnSwitch = document.querySelector(".btn");

const switcher = function () {
  countDownDate = new Date();
  countDownDate.setSeconds(countDownDate.getSeconds() + 11);
};

btnSwitch.addEventListener("click", switcher);
