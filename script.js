const cells = document.querySelectorAll(".cell")
const board = document.getElementById("tableBoard")
const player1 = "X"
const player2 = "O"
let turn = player2
let player1Name;
let player2Name;
let winner;
const resultElement = document.querySelector(".result")
const resultPlayerOneTitle = document.querySelector(".firstPlayer")
const resultPlayerTwoTitle = document.querySelector(".secondPlayer")
const firstPlayerResultElement = document.querySelector(".firstPlayerResult")
const secondPlayerResultElement = document.querySelector(".secondPlayerResult")
let firstPlayerResult = 0;
let secondPlayerResult = 0;
const whoseTurnElement = document.querySelector(".whose-turn")

startGame()

function startGame() {

    winner = "";
   
    if (sessionStorage.getItem("player1Name") === null) {
        player1Name = prompt("Please enter the name of Player 1")
        sessionStorage.setItem('player1Name', player1Name)
    }
    else {
        player1Name = sessionStorage.getItem("player1Name")
    }

    if (sessionStorage.getItem("player2Name") === null) {
        player2Name = prompt("Please enter the name of Player 2")
        sessionStorage.setItem('player2Name', player2Name)
    }
    else {
        player2Name = sessionStorage.getItem("player2Name")
    }

    if (player1Name === null || player1Name === "") {
        player1Name = "Player 1"
    }
    if (player2Name === null || player2Name === "") {
        player2Name = "Player 2"
    }

    resultPlayerOneTitle.textContent = player1Name;
    resultPlayerTwoTitle.textContent = player2Name;
    whoseTurnElement.textContent = `${player1Name} is playing - (${player1})`
    createHtml(firstPlayerResult, secondPlayerResult)

}



board.addEventListener("click", function (e) {
    
    let clicked = e.target.id

    if (cells[clicked].textContent === "") {
        let turn = changeTurn()
        if (turn === "O") {
            whoseTurnElement.textContent = `${player1Name} is playing - (${player1})`
        }
        else {
            whoseTurnElement.textContent = `${player2Name} is playing - (${player2}) `
        }
    }
    play(turn, clicked)
})

function changeTurn() {
    if (turn === player1) {
        turn = player2
        return turn
    }
    else {
        turn = player1
        return turn
    }
}

function play(turn, clicked) {

    if (cells[clicked].textContent === "") {
        cells[clicked].textContent = turn
    }
    checkWinner(clicked, turn)
}

function checkWinner() {

    if (cells[0].textContent === "X" && cells[1].textContent === "X" && cells[2].textContent === "X") {
        winner = player1Name
        winnerFunc(winner)
    }
    if (cells[0].textContent === "O" && cells[1].textContent === "O" && cells[2].textContent === "O") {
        winner = player2Name
        winnerFunc(winner)
    }
    if (cells[3].textContent === "X" && cells[4].textContent === "X" && cells[5].textContent === "X") {
        winner = player1Name
        winnerFunc(winner)
    }
    if (cells[3].textContent === "O" && cells[4].textContent === "O" && cells[5].textContent === "O") {
        winner = player2Name
        winnerFunc(winner)
    }
    if (cells[6].textContent === "X" && cells[7].textContent === "X" && cells[8].textContent === "X") {
        winner = player1Name
        winnerFunc(winner)
    }
    if (cells[6].textContent === "O" && cells[7].textContent === "O" && cells[8].textContent === "O") {
        winner = player2Name
        winnerFunc(winner)
    }
    if (cells[0].textContent === "X" && cells[3].textContent === "X" && cells[6].textContent === "X") {
        winner = player1Name
        winnerFunc(winner)
    }
    if (cells[0].textContent === "O" && cells[3].textContent === "O" && cells[6].textContent === "O") {
        winner = player2Name
        winnerFunc(winner)
    }
    if (cells[1].textContent === "X" && cells[4].textContent === "X" && cells[7].textContent === "X") {
        winner = player1Name
        winnerFunc(winner)
    }
    if (cells[1].textContent === "O" && cells[4].textContent === "O" && cells[7].textContent === "O") {
        winner = player2Name
        winnerFunc(winner)
    }
    if (cells[2].textContent === "X" && cells[5].textContent === "X" && cells[8].textContent === "X") {
        winner = player1Name
        winnerFunc(winner)
    }
    if (cells[2].textContent === "O" && cells[5].textContent === "O" && cells[8].textContent === "O") {
        winner = player2Name
        winnerFunc(winner)
    }
    if (cells[0].textContent === "X" && cells[4].textContent === "X" && cells[8].textContent === "X") {
        winner = player1Name
        winnerFunc(winner)
    }
    if (cells[0].textContent === "O" && cells[4].textContent === "O" && cells[8].textContent === "O") {
        winner = player2Name
        winnerFunc(winner)
    }
    if (cells[2].textContent === "X" && cells[4].textContent === "X" && cells[6].textContent === "X") {
        winner = player1Name
        winnerFunc(winner)
    }
    if (cells[2].textContent === "O" && cells[4].textContent === "O" && cells[6].textContent === "O") {
        winner = player2Name
        winnerFunc(winner)
    }
    if ((cells[0].textContent !== "" && cells[1].textContent !== "" && cells[2].textContent !== "" && cells[3].textContent !== "" && cells[4].textContent !== "" && cells[5].textContent !== "" && cells[6].textContent !== "" && cells[7].textContent !== "" && cells[8].textContent !== "") && winner === "") {
        draw()
    }
}

function winnerFunc(value) {
    alert("WINNER : " + value)
    addPoint(value);
    gameOver()
}

function draw() {
    alert("DRAW !")
    gameOver()
}

function gameOver() {
    cells[0].textContent = ""
    cells[1].textContent = ""
    cells[2].textContent = ""
    cells[3].textContent = ""
    cells[4].textContent = ""
    cells[5].textContent = ""
    cells[6].textContent = ""
    cells[7].textContent = ""
    cells[8].textContent = ""
    turn=player1Name
    startGame();
}

function addPoint(value) {
    if (value === player1Name) {
        firstPlayerResult++
    }
    else if (value === player2Name) {
        secondPlayerResult++
    }

    createHtml(firstPlayerResult, secondPlayerResult)

}

function createHtml(firstPlayerResult, secondPlayerResult) {
    firstPlayerResultElement.textContent = firstPlayerResult
    secondPlayerResultElement.textContent = secondPlayerResult;
}
