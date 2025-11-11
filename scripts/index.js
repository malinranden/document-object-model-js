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

text.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const typedWord = text.value; // det som skrivs i input field ska sparas i typedWord variablen
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

    const button = document.createElement("button");
    button.textContent = "START OVER";
    endgameEl.appendChild(button);
}