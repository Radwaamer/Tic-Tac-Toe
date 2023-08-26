// noImplicitAny
// noImplicitReturns
// noUnusedLocals
// noUnusedParameters
// allowUnreachableCode
// preserveConstEnums
// noImplicitOverride
let turn = "X";
let game = true;
const board = document.querySelector(".game-container");
const winner = document.querySelector(".winner");
const playAgain = document.querySelector("button");
const createBoard = ()=>{
    for(let i = 1; i < 10; i++)makeBox(i);
};
const runGame = ()=>{
    const allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach((box)=>listenBox(box));
};
function main() {
    createBoard();
    runGame();
}
const switchTurn = ()=>{
    turn === "X" ? turn = "O" : turn = "X";
};
const PickWinner = (allSigns)=>{
    if (allSigns[0] == allSigns[1] && allSigns[1] == allSigns[2] && allSigns[0] != "" || allSigns[3] == allSigns[4] && allSigns[4] == allSigns[5] && allSigns[3] != "" || allSigns[6] == allSigns[7] && allSigns[7] == allSigns[8] && allSigns[6] != "" || allSigns[0] == allSigns[3] && allSigns[3] == allSigns[6] && allSigns[0] != "" || allSigns[1] == allSigns[4] && allSigns[4] == allSigns[7] && allSigns[1] != "" || allSigns[2] == allSigns[5] && allSigns[5] == allSigns[8] && allSigns[2] != "" || allSigns[0] == allSigns[4] && allSigns[4] == allSigns[8] && allSigns[0] != "" || allSigns[2] == allSigns[4] && allSigns[4] == allSigns[6] && allSigns[2] != "") return true;
    else {
        if (!allSigns.includes("")) {
            endGame();
            winner.textContent = "";
        }
        return false;
    }
};
const checkWinner = ()=>{
    const allBoxes = document.querySelectorAll(".box");
    const allSigns = [];
    allBoxes.forEach((box)=>{
        let boxContent = box.textContent;
        if (boxContent == null) boxContent = "";
        allSigns.push(boxContent);
    });
    return PickWinner(allSigns);
};
const handleButton = ()=>{
    game = true;
    const allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach((box)=>{
        box.textContent = "";
        listenBox(box);
    });
    winner.textContent = "";
    playAgain.style.display = "none";
};
const endGame = ()=>{
    game = false;
    listenBox(board);
    winner.textContent = `Winner Is ${turn}`;
    playAgain.style.display = "block";
    playAgain.addEventListener("click", handleButton);
};
const addSign = (box)=>{
    if (box.textContent == "") {
        box.textContent = turn;
        !checkWinner() ? switchTurn() : endGame();
    }
};
const listenBox = (box)=>{
    box.addEventListener("click", function add() {
        game ? addSign(box) : this.removeEventListener("click", add);
    });
};
const makeBox = (i)=>{
    const box = document.createElement("div");
    box.className = "box";
    box.id = `box-${i}`;
    box.textContent = "";
    board.appendChild(box);
};
main();

//# sourceMappingURL=index.242b51c6.js.map
