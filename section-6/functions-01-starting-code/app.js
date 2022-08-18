const startGameBtn = document.getElementById("start-game-btn");

const ROCK = 'Rock';
const PAPER = 'Peper';
const SICISSOR = 'Sicissor';
const DEFAUL_USER_SELECTION = ROCK;



let gameIsRunning = false  ;
const getPlayerChice = function() {
    const selection = prompt('Rock, Paper or Sicissor');
    if(selection !== ROCK &&
       selection !== PAPER &&
       selection !== SICISSOR){
           alert('Invalid choice! we chode rock for you!')
           return DEFAUL_USER_SELECTION
       }
    return selection
};




startGameBtn.addEventListener("click", ()=>{
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log("Gage is starting ....");
    const playerSelection = getPlayerChice();
    console.log(`Player selected ${playerSelection}`);
});





multipleParamsHeandler = (...numbers) =>{
    for(num of numbers){
        console.log(num);
    }
}

multipleParamsHeandler(1,2,3,4,5,6,7)



