console.log("Welcome to tic tac toe");

let music = new Audio("win.mp3");
let audioTurn = new Audio("soft.mp3");
let gameover = new Audio("ting.mp3");
let turn = "X";
let isgameover = false;

// Function to change the turn 

const changeTurn = () => {
    return turn == "X" ? 0 : "X"
}

// Function to check

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 5, 7, 0],
        [3, 4, 5, 5, 24, 0],
        [6, 7, 8, 5, 40, 0],
        [0, 3, 6, -11, 24, 90],
        [1, 4, 7, 5, 24, 90],
        [2, 5, 8, 20, 24, 90],
        [0, 4, 8, 6, 25, 45],
        [2, 4, 6, 6, 23, 135]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + "  >>> Won  😎"
            isgameover = true;
            music.play();
            document.querySelector(".imgBox").getElementsByTagName('img')[0].style.width = '30vw';
            document.querySelector(".line").style.width = "80%";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

// Game logic
// music.play();
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', (e) => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        };
    });
});

// Add onclick listener to reset button

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    })
    turn = "X";
    isgameover = false;
    gameover.play();
    document.querySelector(".line").style.width = "0";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = '0px';
})