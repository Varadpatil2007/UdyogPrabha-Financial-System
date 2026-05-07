// Countdown till 1st June 2025
const countdownEl = document.getElementById("countdown");
const launchDate = new Date("June 1, 2025 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  if (distance < 0) {
    countdownEl.innerText = "Live Now!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerText = `Launching in ${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
