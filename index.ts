// noImplicitAny
// noImplicitReturns
// noUnusedLocals
// noUnusedParameters
// allowUnreachableCode
// preserveConstEnums
// noImplicitOverride

type Turn= "X" | "O" | "";
let turn:Turn ="X";
let game=true;

const board= document.querySelector(".game-container") as HTMLElement;
const winner=<HTMLElement> document.querySelector(".winner");
const playAgain=document.querySelector("button") as HTMLElement;


const createBoard = ():void=>{
    for(let i:number=1;i<10;i++) makeBox(i);
}


const runGame = ():void=>{
    const allBoxes:NodeListOf<Element>= document.querySelectorAll(".box");
    allBoxes.forEach(box=>listenBox(box));
}



function main():void {
    createBoard();
    runGame();
}


const switchTurn= ():void =>{
    turn === "X" ? turn="O": turn="X";
}


const PickWinner=(allSigns:string[]):boolean =>{
    if(
        (allSigns[0]==allSigns[1]&&allSigns[1]==allSigns[2]&&allSigns[0]!="")||
        (allSigns[3]==allSigns[4]&&allSigns[4]==allSigns[5]&&allSigns[3]!="")||
        (allSigns[6]==allSigns[7]&&allSigns[7]==allSigns[8]&&allSigns[6]!="")||
        (allSigns[0]==allSigns[3]&&allSigns[3]==allSigns[6]&&allSigns[0]!="")||
        (allSigns[1]==allSigns[4]&&allSigns[4]==allSigns[7]&&allSigns[1]!="")||
        (allSigns[2]==allSigns[5]&&allSigns[5]==allSigns[8]&&allSigns[2]!="")||
        (allSigns[0]==allSigns[4]&&allSigns[4]==allSigns[8]&&allSigns[0]!="")||
        (allSigns[2]==allSigns[4]&&allSigns[4]==allSigns[6]&&allSigns[2]!="")
    ){
        return true;
    }else{
        if(!allSigns.includes("")){
            endGame();
            winner.textContent="";
        }
        return false;
    }
}


const checkWinner = ():boolean=>{
    const allBoxes:NodeListOf<Element>= document.querySelectorAll(".box");
    const allSigns:string[]= [];
    allBoxes.forEach(box=>{
        let boxContent:string|null=box.textContent;
        if(boxContent==null)boxContent="";
        allSigns.push(boxContent);
    });
    return PickWinner(allSigns);
}


const handleButton= ():void=>{
    game=true;
    const allBoxes:NodeListOf<Element>= document.querySelectorAll(".box");
    allBoxes.forEach(box=>{
        box.textContent="";
        listenBox(box);
    });
    winner.textContent="";
    playAgain.style.display="none";
}


const endGame = ():void =>{
    game=false;
    listenBox(board);
    winner.textContent=`Winner Is ${turn}`;
    playAgain.style.display="block";
    playAgain.addEventListener("click",handleButton);
}


const addSign =(box:Element):void =>{
    if(box.textContent==""){
        box.textContent=turn;
        !checkWinner()? switchTurn(): endGame();
    }
}


const listenBox = (box:Element):void =>{
    box.addEventListener("click",function add(this: any){
        (game) ? addSign(box): this.removeEventListener("click",add);
    });
}


const makeBox=(i:number):void=>{
    const box:HTMLDivElement = document.createElement("div");
    box.className="box";
    box.id=`box-${i}`;
    box.textContent="";
    board.appendChild(box);
}


main();