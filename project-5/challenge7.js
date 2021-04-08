// First
function startGame() {
    document.getElementById("a").onclick = talk;
    document.getElementById("a").innerText = "Talk";
    document.getElementById("b").onclick = talk;
    document.getElementById("b").innerText = "Don't Move";
    document.getElementById("title").innerHTML = "<h2>You woke up, and opened your eyes. You found out that you're on an island. You saw a person walking towards you...</h2>";
    document.getElementById("name").innerHTML = "<h2>You</h2>";
    document.querySelector(".top").style.backgroundImage = 'url("https://ak.picdn.net/shutterstock/videos/13503524/thumb/1.jpg")'
}

function quitGame() {
    window.close()
}

// Second

function talk() {
    document.getElementById("a").onclick = friendly;
    document.getElementById("a").innerText = "Be friendly";
    document.getElementById("b").onclick = shout;
    document.getElementById("b").innerText = "Shout at him!";
    document.getElementById("title").innerHTML = "<h2>He walks towards you, and started to talk to you. You couldn't understant his language.</h2>";
    document.getElementById("name").innerHTML = "<h2>???</h2>";
    document.querySelector(".top").style.backgroundImage = 'url("https://www.aconsciousrethink.com/wp-content/uploads/2019/09/ex-wants-you-back-702x336.jpg")'
}

// Good

function friendly() {
    document.getElementById("a").onclick = follow;
    document.getElementById("a").innerText = "Follow Him";
    document.getElementById("b").onclick = discover;
    document.getElementById("b").innerText = "Run Away";
    document.getElementById("title").innerHTML = "<h2>He found out that you couldn't understand his words. He smiled at you, and waved at you telling you to come with him.</h2>";
    document.getElementById("name").innerHTML = "<h2>You</h2>";
    document.querySelector(".top").style.backgroundImage = 'url("https://www.aconsciousrethink.com/wp-content/uploads/2019/09/ex-wants-you-back-702x336.jpg")'
}

// Good - 1
function follow() {
    document.getElementById("a").onclick = work;
    document.getElementById("a").innerText = "Work";
    document.getElementById("b").onclick = dance;
    document.getElementById("b").innerText = "Dance";
    document.getElementById("title").innerHTML = "<h2>He took you to their village, and gave you a good meal.</h2>";
    document.getElementById("name").innerHTML = "<h2>You</h2>";
    document.querySelector(".top").style.backgroundImage = 'url("https://images.fineartamerica.com/images-medium-large/thanksgiving-dinner-vance-fox.jpg")'
}

// Good - 2
function work() {
    document.getElementById("a").onclick = startGame;
    document.getElementById("a").innerText = "Play Again";
    document.getElementById("b").onclick = quitGame;
    document.getElementById("b").innerText = "Quit Game";
    document.getElementById("title").innerHTML = "<h2>They found out that you're really good at working. They decided to force you to work forever.</h2>";
    document.getElementById("name").innerHTML = "<h2>You</h2>";
    document.querySelector(".top").style.backgroundImage = 'url("https://images-na.ssl-images-amazon.com/images/I/71M3glE5W8L._SL1500_.jpg")'
}

// Good - 3
function dance() {
    document.getElementById("a").onclick = startGame;
    document.getElementById("a").innerText = "Play Again";
    document.getElementById("b").onclick = quitGame;
    document.getElementById("b").innerText = "Quit Game";
    document.getElementById("title").innerHTML = "<h2>They were impressed, and they took out a boat and send you back home.</h2>";
    document.getElementById("name").innerHTML = "<h2>You</h2>";
    document.querySelector(".top").style.backgroundImage = 'url("https://t3.ftcdn.net/jpg/03/14/56/66/360_F_314566645_UNHlYyGK2EVdGQ8MoNw95vvH44yknrc7.jpg")'
} 

// Bad

function shout() {
    document.getElementById("a").onclick = sleep;
    document.getElementById("a").innerText = "Sit under a tree and sleep";
    document.getElementById("b").onclick = discover;
    document.getElementById("b").innerText = "Discover the island";
    document.getElementById("title").innerHTML = "<h2>You shouted at him. He looks scared, and started to run away.</h2>";
    document.getElementById("name").innerHTML = "<h2>You</h2>";
    document.querySelector(".top").style.backgroundImage = 'url("https://www.thewisetravellers.com/wp-content/uploads/running-away-slider.jpg")'
}

// Bad - 1
function sleep() {
    document.getElementById("a").onclick = drag;
    document.getElementById("a").innerText = "You can't do anything";
    document.getElementById("b").onclick = drag;
    document.getElementById("b").innerText = "You can't do anything";
    document.getElementById("title").innerHTML = "<h2>You slepted for few minutes...Suddetly, a group of people came to you, and drag you away</h2>";
    document.getElementById("name").innerHTML = "<h2>You</h2>";
    document.querySelector(".top").style.backgroundImage = 'url("https://www.crushpixel.com/big-static13/preview4/asian-man-sleeping-under-tree-1264052.jpg")'
}

// Bad - 2
function drag() {
    document.getElementById("a").onclick = startGame;
    document.getElementById("a").innerText = "Play Again";
    document.getElementById("b").onclick = quitGame;
    document.getElementById("b").innerText = "Quit Game";
    document.getElementById("title").innerHTML = "<h2>They dragged you to their village, and executed you.</h2>";
    document.getElementById("name").innerHTML = "<h2>You</h2>";
    document.querySelector(".top").style.backgroundImage = 'url("https://images-na.ssl-images-amazon.com/images/I/71M3glE5W8L._SL1500_.jpg")'
}

// Bad - 3
function discover() {
    document.getElementById("a").onclick = go;
    document.getElementById("a").innerText = "Search";
    document.getElementById("b").onclick = leave;
    document.getElementById("b").innerText = "Leave the cave";
    document.getElementById("title").innerHTML = "<h2>You found a cave. It's really dark inside...</h2>";
    document.getElementById("name").innerHTML = "<h2>You</h2>";
    document.querySelector(".top").style.backgroundImage = 'url("https://static.bangkokpost.com/media/content/20210120/c1_3871335.jpg")'
}

function leave() {
    document.getElementById("a").onclick = drag;
    document.getElementById("a").innerText = "You can't do anything";
    document.getElementById("b").onclick = drag;
    document.getElementById("b").innerText = "You can't do anything";
    document.getElementById("title").innerHTML = "<h2>After you came out from the cave, you saw a group of people came to you, and drag you away</h2>";
    document.getElementById("name").innerHTML = "<h2>You</h2>";
    document.querySelector(".top").style.backgroundImage = 'url("https://ak.picdn.net/shutterstock/videos/13503524/thumb/1.jpg")'
}

// Bad - 4
function go() {
    document.getElementById("a").onclick = startGame;
    document.getElementById("a").innerText = "Play Again";
    document.getElementById("b").onclick = quitGame;
    document.getElementById("b").innerText = "Quit Game";
    document.getElementById("title").innerHTML = "<h2>You did not see a cliff inside. You fell and died</h2>";
    document.getElementById("name").innerHTML = "<h2>You</h2>";
    document.querySelector(".top").style.backgroundImage = 'url("https://previews.123rf.com/images/filipfico/filipfico1604/filipfico160401645/55479695-man-falls-off-a-cliff-vector.jpg")'
}