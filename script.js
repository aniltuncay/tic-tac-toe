
const cells = document.querySelectorAll(".cell")
const board = document.getElementById("tableBoard")
let player1 = "X"
let player2 = "O"
let turn = player2
let player1Name
let player2Name

startGame()

function startGame() {
    if (localStorage.getItem("player1Name") === null) {
        player1Name = prompt("Please enter the name of Player 1")
        localStorage.setItem('player1Name', player1Name)
    }
    else {
        player1Name = localStorage.getItem("player1Name")
    }

    if (localStorage.getItem("player2Name") === null) {
        player2Name = prompt("Please enter the name of Player 2")
        localStorage.setItem('player2Name', player2Name)
    }
    else {
        player2Name = localStorage.getItem("player2Name")
    }

    if (player1Name === null || player1Name === " ") {
        player1Name = "Player 1"
    }
    if (player2Name === null || player2Name === " ") {
        player2Name = "Player 2"
    }

}



const whoseTurnElement = document.querySelector(".whose-turn")

board.addEventListener("click", function (e) {
    let turn = changeTurn()
    if (turn === "O") {
        whoseTurnElement.textContent = `${player1Name} oynuyor - ${player1}`
    }
    else {
        whoseTurnElement.textContent = `${player2Name} oynuyor - ${player2} `
    }
    let clicked = e.target.id

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
        winner(player1Name)
    }
    if (cells[0].textContent === "O" && cells[1].textContent === "O" && cells[2].textContent === "O") {
        winner(player2Name)
    }
    if (cells[3].textContent === "X" && cells[4].textContent === "X" && cells[5].textContent === "X") {
        winner(player1Name)
    }
    if (cells[3].textContent === "O" && cells[4].textContent === "O" && cells[5].textContent === "O") {
        winner(player2Name)
    }
    if (cells[6].textContent === "X" && cells[7].textContent === "X" && cells[8].textContent === "X") {
        winner(player1Name)
    }
    if (cells[6].textContent === "O" && cells[7].textContent === "O" && cells[8].textContent === "O") {
        winner(player2Name)
    }
    if (cells[0].textContent === "X" && cells[3].textContent === "X" && cells[6].textContent === "X") {
        winner(player1Name)
    }
    if (cells[0].textContent === "O" && cells[3].textContent === "O" && cells[6].textContent === "O") {
        winner(player2Name)
    }
    if (cells[1].textContent === "X" && cells[4].textContent === "X" && cells[7].textContent === "X") {
        winner(player1Name)
    }
    if (cells[1].textContent === "O" && cells[4].textContent === "O" && cells[7].textContent === "O") {
        winner(player2Name)
    }
    if (cells[2].textContent === "X" && cells[5].textContent === "X" && cells[8].textContent === "X") {
        winner(player1Name)
    }
    if (cells[2].textContent === "O" && cells[5].textContent === "O" && cells[8].textContent === "O") {
        winner(player2Name)
    }
    if (cells[0].textContent === "X" && cells[4].textContent === "X" && cells[8].textContent === "X") {
        winner(player1Name)
    }
    if (cells[0].textContent === "O" && cells[4].textContent === "O" && cells[8].textContent === "O") {
        winner(player2Name)
    }
    if (cells[2].textContent === "X" && cells[4].textContent === "X" && cells[6].textContent === "X") {
        winner(player1Name)
    }
    if (cells[2].textContent === "O" && cells[4].textContent === "O" && cells[6].textContent === "O") {
        winner(player2Name)
    }
}

function winner(value) {
    alert("KAZANAN : " + value)
    gameOver()
}

function gameOver() {
    location.reload()
}
