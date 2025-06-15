const redButton = document.getElementById("red")
const blueButton = document.getElementById("blue")
const greenButton = document.getElementById("green")
const yellowButton = document.getElementById("yellow")
const startButton = document.getElementById("start")
const stepDiv = document.getElementById("step")
const secondDiv = document.getElementById("seconds");

let currentUser = JSON.parse(localStorage.getItem("currentUser"))
let indexClick = 0;
let step = 0;
const options = ["red", "blue", "green", "yellow"];
let randomColors = [];

startButton.addEventListener('click', () => {
    indexClick = 0;
    randomColors = []
    step = 0
    start();
})

const start = () => {
    let currentColor = options[Math.floor(Math.random() * options.length)];
    randomColors.push(currentColor);
    indexClick = 0;
    step++
    stepDiv.innerHTML = ` :הינך בשלב ${step} !!!${currentUser.name}הי`
    randomColors.forEach((color, i) => {
        changCOlor(color, i);
    })
}

const checkIfCorect = (color) => {
    if (color === randomColors[indexClick]) {
        indexClick++;
        const audio = new Audio("../audio/לחיצה נכונה.mp3")
        audio.play();
        if (indexClick === randomColors.length)
            start();
    }
    else {
        const audio = new Audio("../audio/כישלן.wav")
        audio.play();
        alert("אופס,נכשלת")
    }
}

const changCOlor = (color, i) => {
    let btnColor = document.getElementById(color);
    setTimeout(() => {
        btnColor.classList.remove(color);
        btnColor.style.backgroundColor = color;
    }, 800 * (i + 1));

    setTimeout(() => {
        btnColor.style.backgroundColor = '';
        btnColor.classList.add(color);
    }, 1000 * (i + 1));
}

redButton.addEventListener("click", () => { checkIfCorect(redButton.id) })
blueButton.addEventListener("click", () => { checkIfCorect(blueButton.id) })
yellowButton.addEventListener("click", () => { checkIfCorect(yellowButton.id) })
greenButton.addEventListener("click", () => { checkIfCorect(greenButton.id) })