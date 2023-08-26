// noImplicitAny
// noImplicitReturns
// noUnusedLocals
// noUnusedParameters
// allowUnreachableCode
// preserveConstEnums
// noImplicitOverride
var turn = "X";
var game = true;
var board = document.querySelector(".game-container");
var winner = document.querySelector(".winner");
var playAgain = document.querySelector("button");
var createBoard = function() {
    for(var i = 1; i < 10; i++)makeBox(i);
};
var runGame = function() {
    var allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach(function(box) {
        return listenBox(box);
    });
};
function main() {
    createBoard();
    runGame();
}
var switchTurn = function() {
    turn === "X" ? turn = "O" : turn = "X";
};
var PickWinner = function(allSigns) {
    if (allSigns[0] == allSigns[1] && allSigns[1] == allSigns[2] && allSigns[0] != "" || allSigns[3] == allSigns[4] && allSigns[4] == allSigns[5] && allSigns[3] != "" || allSigns[6] == allSigns[7] && allSigns[7] == allSigns[8] && allSigns[6] != "" || allSigns[0] == allSigns[3] && allSigns[3] == allSigns[6] && allSigns[0] != "" || allSigns[1] == allSigns[4] && allSigns[4] == allSigns[7] && allSigns[1] != "" || allSigns[2] == allSigns[5] && allSigns[5] == allSigns[8] && allSigns[2] != "" || allSigns[0] == allSigns[4] && allSigns[4] == allSigns[8] && allSigns[0] != "" || allSigns[2] == allSigns[4] && allSigns[4] == allSigns[6] && allSigns[2] != "") return true;
    else {
        if (!allSigns.includes("")) {
            endGame();
            winner.textContent = "";
        }
        return false;
    }
};
var checkWinner = function() {
    var allBoxes = document.querySelectorAll(".box");
    var allSigns = [];
    allBoxes.forEach(function(box) {
        var boxContent = box.textContent;
        if (boxContent == null) boxContent = "";
        allSigns.push(boxContent);
    });
    return PickWinner(allSigns);
};
var handleButton = function() {
    game = true;
    var allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach(function(box) {
        box.textContent = "";
        listenBox(box);
    });
    winner.textContent = "";
    playAgain.style.display = "none";
};
var endGame = function() {
    game = false;
    listenBox(board);
    winner.textContent = "Winner Is ".concat(turn);
    playAgain.style.display = "block";
    playAgain.addEventListener("click", handleButton);
};
var addSign = function(box) {
    if (box.textContent == "") {
        box.textContent = turn;
        !checkWinner() ? switchTurn() : endGame();
    }
};
var listenBox = function(box) {
    box.addEventListener("click", function add() {
        game ? addSign(box) : this.removeEventListener("click", add);
    });
};
var makeBox = function(i) {
    var box = document.createElement("div");
    box.className = "box";
    box.id = "box-".concat(i);
    box.textContent = "";
    board.appendChild(box);
};
main();

//# sourceMappingURL=index.c36f364e.js.map
