console.log("Welcome to Tic Tac Toe");
let turn = "X";

let gameover = false;



const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

const checkWin = () => {
    let win = [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],
        ["0", "3", "6"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["0", "4", "8"],
        ["2", "4", "6"]      
    ]
    win.forEach (e  => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = `${boxText[e[0]].innerText} won`;
            gameover = true;
        }
    })
}  

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxText.innerText === "") { 
            boxText.innerText = turn;  
            turn = changeTurn();
            checkWin();
            document.querySelector(".info").innerText = `Turn for ${turn}`;  
            if (!gameover) {
                document.getElementsByClassName(".info").innerText = `Turn for ${turn}`;
            }
        }
    }) 
})

// Added error handling for potential reference errors
try {
    console.log("Welcome to Tic Tac Toe");
} catch (error) {
    console.error("An error occurred: ", error);
}