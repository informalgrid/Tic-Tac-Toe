let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn= document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetgame = ()=>{
     turn0 = true;
     enableboxes();
     msgcontainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        
        if (turn0) {
           box.innerText = "o";
           turn0 = false;
        }
        else{
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableboxes = ()=>{
    for(let box of boxes){
    box.disabled = true;
    }
};
const enableboxes = ()=>{
    for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
    }
};
const showWinner = (winner)=>{
    msg.innerText = `Congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkWinner = () => {
    for(let pattern of winpatterns){
       let pos1val = boxes[pattern[0]].innerText;
       let pos2val = boxes[pattern[1]].innerText;
       let pos3val = boxes[pattern[2]].innerText;    

       if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val == pos2val && pos2val == pos3val){
            console.log("winner", pos1val);
            showWinner(pos1val);
        }
       }
    }
};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);