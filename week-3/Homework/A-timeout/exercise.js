/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

const main = document.querySelector("#main");

setTimeout(() => {
  main.style.backgroundColor = "pink";
}, 500);

const colors = ["orange", "blue", "pink", "lightblue", "coral"];

setInterval(() => {
  main.style.backgroundColor =
    colors[Math.floor(Math.random() * (colors.length - 1))];
}, 5000);
