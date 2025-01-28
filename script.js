let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uscore = document.querySelector("#user-score");
const cscore = document.querySelector("#comp-score");

const drawgame = () => {
    console.log("the game was draw");
    msg.innerText = "draw!  play again"
    msg.style.backgroundColor = "darkgray";
}

const showwinner = (userwin,userchoice,compchoice) => {
    if (userwin){
        userscore++
        uscore.innerText = userscore;
        console.log("you win!")
        msg.innerText = `you win! your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "green";
    }else{
        compscore++
        cscore.innerText = compscore;
        console.log("you lose" )
        msg.innerText = `you lost. your ${userchoice} defeated by ${compchoice}`
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice = " ,userchoice)        // mudalar way of programing means we creating function that useable in future......
 // generate computer choice 
    const compchoice = gencompchoice();
    console.log("computer choice =", compchoice);

    if (userchoice === compchoice){
        // draw game 
        drawgame();
    } else {
        let userwin = true;
        if(userchoice === "rock") {
            // sessors and paper
          userwin = compchoice === "paper" ? false : true;
        }  else  if (userchoice === "paper") {
        // rock and sessors
        userwin = compchoice === "rock" ? true : false;
     } else {
        // rock paper
        userwin = compchoice === "rock" ? false : true ;
     }

     showwinner (userwin,userchoice,compchoice);

    }    
}

const gencompchoice = () => {
    const option = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() *3 );
    return option[randidx];
}

choices.forEach((choice) => {
    const userchoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        playgame(userchoice);
    })
    
})






















