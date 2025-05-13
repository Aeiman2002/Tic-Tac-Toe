let btn = document.querySelectorAll(".btn");

let resetBtn = document.getElementById("resetBtn");

// player turn variable if value true prints 0 if value false prints X
let turn0 = true;

// Game winning patterns
// Array of Array (2D Array)
const winningPatterns = [
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8] 
];


// Function for button clicking
btn.forEach(btn => {
    btn.addEventListener("click" , ( ) =>{
    // Condition
    if(turn0){
        btn.innerText = "0"            
        turn0 = false        
    }
    else{
        btn.innerText = "X"
        turn0 = true        
    }
    btn.disabled = true;
    // Calling check winner function
    checkWinner()
    })
});


// Function for checking winner
const checkWinner = () => {
    for (const pattern of winningPatterns) {
        console.log(pattern);
    }
}
