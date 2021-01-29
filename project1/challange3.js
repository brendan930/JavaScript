/*

You will create an ice hockey scoreboard.
You can add and remove goals.
You can control the current period (there are 3 periods in Hockey)

Lastly, you can add a player name to the penalty list.
Create an area where you can add and remove players name from a penalty area.

1. You will need variables to store the points
2. When a user clicks on the add button, you will need to add to the variable, and then display it in HTML
3. When a user clicks the subtract button, you will need to subtract from the variable, and then display it in HTML
4. Use CSS Flexbox or Grids to build your scoreboard layout
5. You will need a button to clear the penalty list
6. A reset score button should also be included that clears your entire scoreboard.
7. The score cannot be less than 0
8. The period can only be 1, 2, or 3 (starting from 1)

GOOD LUCK ✌🏒

*/

var hscore = 0;
var gscore = 0;
var hPLYR = 0;
var hPenalty = 0;
var gPLYR = 0;
var gPenalty = 0;
var period = 0;
var hsog = 0;
var gsog = 0;

document.querySelector(".a").innerHTML = hscore;
document.querySelector(".h").innerHTML = gscore;
document.querySelector(".b").innerHTML = hPLYR;
document.querySelector(".c").innerHTML = hPenalty;
document.querySelector(".i").innerHTML = gPLYR;
document.querySelector(".j").innerHTML = gPenalty;
document.querySelector(".e").innerHTML = period;
document.querySelector(".f").innerHTML = hsog;
document.querySelector(".g").innerHTML = gsog;



function addHome() {
  hscore = hscore + 1
  document.querySelector(".a").innerHTML = hscore
}

function mHome() {
  hscore = hscore - 1
  document.querySelector(".a").innerHTML = hscore

  if (hscore < 0) {
    hscore = 0
    document.querySelector(".a").innerHTML = hscore
  }
}

function addGuest() {
  gscore = gscore + 1
  document.querySelector(".h").innerHTML = gscore
}

function mGuest() {
  gscore = gscore - 1
  document.querySelector(".h").innerHTML = gscore

  if (gscore < 0) {
    gscore = 0
    document.querySelector(".a").innerHTML = gscore
  }
}

function addHPLYR() {
  hPLYR = hPLYR + 1
  document.querySelector(".b").innerHTML = hPLYR
}

function mHPLYR() {
  hPLYR = hPLYR - 1
  document.querySelector(".b").innerHTML = hPLYR

  if (hPLYR < 0) {
    hPLYR = 0
    document.querySelector(".a").innerHTML = hPLYR
  }
}

function addHPenalty() {
  hPenalty = hPenalty + 1
  document.querySelector(".c").innerHTML = hPenalty
}

function mHPenalty() {
  hPenalty = hPenalty - 1
  document.querySelector(".c").innerHTML = hPenalty

  if (hPenalty < 0) {
    hPenalty = 0
    document.querySelector(".a").innerHTML = hPenalty
  }
}

function addGPLYR() {
  gPLYR = gPLYR + 1
  document.querySelector(".i").innerHTML = gPLYR
}

function mGPLYR() {
  gPLYR = gPLYR - 1
  document.querySelector(".i").innerHTML = gPLYR

  if (gPLYR < 0) {
    gPLYR = 0
    document.querySelector(".a").innerHTML = gPLYR
  }
}

function addGPenalty() {
  gPenalty = gPenalty + 1
  document.querySelector(".j").innerHTML = gPenalty
}

function mPenalty() {
  gPenalty = gPenalty - 1
  document.querySelector(".j").innerHTML = gPenalty

  if (gPenalty < 0) {
    gPenalty = 0
    document.querySelector(".a").innerHTML = gPenalty
  }
}

function addPeriod() {
  period = period + 1
  document.querySelector(".e").innerHTML = period
}

function addHSOG() {
  hsog = hsog + 1
  document.querySelector(".f").innerHTML = hsog
}

function mHSOG() {
  hsog = hsog - 1
  document.querySelector(".f").innerHTML = hsog

  if (hsog < 0) {
    hsog = 0
    document.querySelector(".a").innerHTML = hsog
  }
}

function addGSOG() {
  gsog = gsog + 1
  document.querySelector(".g").innerHTML = gsog
}

function mGSOG() {
  gsog = gsog - 1
  document.querySelector(".g").innerHTML = gsog

  if (gsog < 0) {
    gsog = 0
    document.querySelector(".a").innerHTML = gsog
  }
}

function addGPLYR() {
  gPLYR = gPLYR + 1
  document.querySelector(".g").innerHTML = gPLYR
}

function mGPLYR() {
  gPLYR = gPLYR - 1
  document.querySelector(".i").innerHTML = gPLYR

  if (gPLYR < 0) {
    gPLYR = 0
    document.querySelector(".a").innerHTML = gPLYR
  }
}
