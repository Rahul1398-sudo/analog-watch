function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12; // Convert to 12-hour format
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDeg = (360 / 12) * hours + (360 / 12) * (minutes / 60);
  const minuteDeg = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
  const secondDeg = (360 / 60) * seconds;

  document.getElementById('hourHand').style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
  document.getElementById('minuteHand').style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
  document.getElementById('secondHand').style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial upda