// Crossroad
function startGame() {
    document.getElementById("a").onclick = left;
    document.getElementById("a").innerText = "Left";
    document.getElementById("b").onclick = quitGame;
    document.getElementById("b").innerText = "Right";
    document.getElementById("title").innerHTML = "<h2>You saw a crossroad infront of you.</h2>";
    document.querySelector(".main").style.backgroundImage = 'url("https://1.bp.blogspot.com/-pV1kyQ2gaMw/XDUi9mJOu3I/AAAAAAABZl4/Umg__41AiJ8_yX6M6LFvjjnALsYQS6dKgCLcBGAs/s1600/cross-roads-horizon_large.jpg")'
  }

function quitGame() {
    window.close()
}

// Chest

function left() {
    console.log("Left")
    document.getElementById("a").onclick = openChest;
    document.getElementById("a").innerText = "Open Chest";
    document.getElementById("b").onclick = quitGame;
    document.getElementById("b").innerText = "Walk Away";
    document.getElementById("title").innerHTML = "<h2>You saw a chest infront of you, do you want to open the chest?</h2>";
    document.querySelector(".main").style.backgroundImage = 'url("https://buildingourrez.com/wp-content/uploads/2019/04/How-to-Build-an-Easy-DIY-Bedroom-Storage-Chest-for-Blankets_0211.jpg")'
}

// Sword



// Dragon

function openChest() {
    console.log("hi")
    document.getElementById("a").onclick = sword;
    document.getElementById("a").innerText = "Fight the dragon";
    document.getElementById("b").onclick = quitGame;
    document.getElementById("b").innerText = "Run away";
    document.getElementById("title").innerHTML = "<h2>You found a sword in the chest, do you want to fight the dragon?</h2>";
    document.querySelector(".main").style.backgroundImage = 'url("https://p1.pxfuel.com/preview/739/959/795/ninja-warrior-japan-assassin.jpg")'
}

function run() {
    document.getElementById("a").onclick = playagain;
    document.getElementById("a").innerText = "Play Again";
    document.getElementById("b").onclick = quitGame;
    document.getElementById("b").innerText = "Quit";
    document.getElementById("title").innerHTML = "<h2>The dragon killed you</h2>";
    document.querySelector(".main").style.backgroundImage = 'url("https://i.kym-cdn.com/entries/icons/facebook/000/029/198/Dark_Souls_You_Died_Screen_-_Completely_Black_Screen_0-2_screenshot.jpg")'
}

// Play again

function playagain() {
    document.getElementById("a").onclick = startGame;
    document.getElementById("a").innerText = "Start the Game";
    document.getElementById("b").onclick = quitGame;
    document.getElementById("b").innerText = "Quit the Game";
    document.getElementById("title").innerHTML = "<h2>Hello! Welcome to my Interactive Story Game!</h2>";
    document.querySelector(".main").style.backgroundImage = 'url("https://i.pinimg.com/originals/7c/44/a4/7c44a4f6a29908e3b375a3d06090bcae.jpg")';
}

// Fight

function sword() {
    document.getElementById("a").onclick = playagain;
    document.getElementById("a").innerText = "Use the sword to kill him";
    document.getElementById("b").onclick = victory;
    document.getElementById("b").innerText = "Use the bow to shoot it";
    document.getElementById("title").innerHTML = "<h2>The dragon is attacking you, what will you do?</h2>";
    document.querySelector(".main").style.backgroundImage = 'url("https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860-dragon-header-iStock-494839519.gif")';
}

function victory() {
    document.getElementById("a").onclick = playagain;
    document.getElementById("a").innerText = "Play Again";
    document.getElementById("b").onclick = quitGame;
    document.getElementById("b").innerText = "Quit Game";
    document.getElementById("title").innerHTML = "<h2>You defeated the dragon!</h2>";
    document.querySelector(".main").style.backgroundImage = 'url("https://cdn.dribbble.com/users/228527/screenshots/2661338/defeated-dragon.jpg")';
}