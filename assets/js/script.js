//game value

let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

function getRandomNum(min = 1, max = 10){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

//UI Variables
const gameWrapper = document.querySelector("#game"),
    minNum        = document.querySelector(".min-num"),
    maxNum        = document.querySelector(".max-num"),
    guessBtn      = document.querySelector("#guessBtn"),
    guessInput    = document.querySelector("#guessInput"),
    message       = document.querySelector(".message");


    minNum.innerText = min;
    maxNum.innerText = max;

    gameWrapper.addEventListener("mousedown", function(e){
        if(e.target.classList.contains("play-again")){
            window.location.reload();
        }
    });

    guessBtn.addEventListener("click", function(){
        let guess = parseInt(guessInput.value);

        if(isNaN(guess) || guess < min || guess > max){
            setMessage(`please enter a number between ${min} and ${max}`, "red");
        } else if(guess === winningNum){
            gameOver(true, `${winningNum} is correct, You win!`);
            playAgain();
        } else {
            guessesLeft--;
            if(guessesLeft == 0){
                gameOver(false, `You lost! the correct number was ${winningNum}`);
                playAgain();
            } else {
                gameOver(false, `Oops! ${guess} is incorrect, you have ${guessesLeft} guess(es) left`);
                guessInput.value = '';
            }
        }

    });


function setMessage(text, color){
    message.style.color = color;
    message.innerText = text;
}


function gameOver(won, msg){
    let color;
    (won) ? color = "green" : color = "red";
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);
}
    

function playAgain(){
    guessInput.disabled = true;
    //play again
    guessBtn.value = "Play Again";
    guessBtn.className += " play-again";

}