let btn = document.querySelectorAll(".btn");

let resetBtn = document.getElementById("resetBtn");

// player turn variable if value true prints 0 if value false prints X
let turn0 = true;

// Game winning patterns
// Array of Array (2D Array)
const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Reset game button function
const resetGame = () => {
    turn0 = true;
    enableBtn();
}

// Function for button clicking
btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Condition
        if (turn0) {
            btn.innerText = "0";
            turn0 = false;
        } else {
            btn.innerText = "X";
            turn0 = true;
        }
        btn.disabled = true;
        // Calling check winner function
        checkWinner();
    });
});

// Buttons disable after winner
const disableBtn = () => {
    for (const btns of btn) {
        btns.disabled = true;
    }
}

// Buttons enable
const enableBtn = () => {
    for (const btns of btn) {
        btns.disabled = false;
        btns.innerText = ""
    }
}
// Function for checking winner
const checkWinner = () => {
  for (let pattern of winningPatterns) {
    console.log(pattern);
    console.log(pattern[0], pattern[1], pattern[2]);
    // Getting value and set values for checking winning patters
    console.log(
      btn[pattern[0]].innerText,
      btn[pattern[1]].innerText,
      btn[pattern[2]].innerText
    );
    // Save these values in variable for store values and compare
    let position1 = btn[pattern[0]].innerText;
    let position2 = btn[pattern[1]].innerText;
    let position3 = btn[pattern[2]].innerText;

    // Checking every button/box have value not empty if any box is empty that's not our winning pattern
    if (position1 != "" && position2 !== "" && position3 != "") {
      // Check patterns values for showing winner
      if (position1 === position2 && position2 === position3) {
        Swal.fire({
          title: `Congratulations! Player ${position1}`,
          imageUrl: "./Images/win.png",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
        disableBtn()
      }
    }
  }
};

// Reset button click

resetBtn.addEventListener("click" , resetGame)