// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
// let randomWord = words[Math.floor(Math.random() * words.length)];
// word.style.backgroundColor = "red"; // bara ett test, ta bort
// word.textContent = randomWord;
// console.dir(word);

let randomWord; 
let score = 0;
let time = 10;

function addWordToDOM () {
    randomWord = words[Math.floor(Math.random() * words.length)];
    word.textContent = randomWord;
}
addWordToDOM();

function updateScore() {
    score += 1;
    scoreEl.textContent = score;
}

// time = parseFloat(timeEl);
text.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const typedWord = text.value; // det som skrivs i input field ska sparas i typedWord variablen
        // timeEl = time;
        if (typedWord === randomWord) {
            updateScore();
            addWordToDOM();
            text.value = "";
            time += 5;
            timeEl.textContent = time + "s";
        }
    }
});


function updateTime() {
    time--;
    timeEl.textContent = time + "s";
    if (time === 0) {
        clearInterval(timer);
        endGame();
    }
}
const timer = setInterval(updateTime, 1000);

function endGame() {
    endgameEl.style.display = "flex";
    const paragraph = document.createElement("p");   
    paragraph.textContent = "Game Over";
    paragraph.style.fontSize = "60px";
    endgameEl.appendChild(paragraph);
}
// endgame();


    // const paragraph = document.createElement("p");
    // endgameEl.style.display = "block"; // this workin
    // // document.createElement("p");
    // // endgameEl.innerHTML = "Hello?";
    // endgameEl.style.backgroundColor = "red";
    // paragraph.classList.add("end-game-container");  