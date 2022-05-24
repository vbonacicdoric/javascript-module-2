let counting;

function secondsToMinutes(sec) {
  let minutes = Math.trunc(sec / 60);
  let seconds = sec % 60;

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  return minutes + ":" + seconds;
}

function writeTime(time) {
  let h1El = document.querySelector("h1");
  h1El.innerText = "Time remaining: " + secondsToMinutes(time);
}

function setAlarm() {
  let numberOfSeconds = document.querySelector("#alarmSet").value;
  writeTime(numberOfSeconds);

  numberOfSeconds--;

  counting = setInterval(function () {
    writeTime(numberOfSeconds);
    if (numberOfSeconds === 0) {
      clearInterval(counting),
        (document.body.style.backgroundColor = "darkblue");
      playAlarm();
    }
    numberOfSeconds--;
  }, 1000);
}

function pauseCountdown() {
  let h1El = document.querySelector("h1");
  h1El.innerText = "Time remaining: 00:00";
  clearInterval(counting);
}

// DO NOT EDIT BELOW HERE

let audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseCountdown();
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
