// script.js
// Initialize variables
let randomNumber = Math.floor(Math.random() * 200) + 1; // Random number between 1 and 200
console.log(randomNumber)
let chancesLeft = 10;

// Function to check the user's guess
function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess").value);
    const chancesCount = document.getElementById("chances-count");
    const tryItMessage = document.getElementById("try-it");

    // If the guess is a valid number
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 200) {
        tryItMessage.textContent = "Please enter a valid number between 1 and 200.";
        return;
    }

    if (userGuess === randomNumber) {
        tryItMessage.textContent = "Congratulations! You guessed the correct number!";
        resetGame();
    } else {
        chancesLeft--;
        chancesCount.textContent = chancesLeft;

        if (chancesLeft <= 0) {
            tryItMessage.textContent = "Sorry! You've run out of chances. The correct number was " + randomNumber;
            resetGame();
        } else {
            if (userGuess < randomNumber) {
                tryItMessage.textContent = "Too low! Try again.";
            } else {
                tryItMessage.textContent = "Too high! Try again.";
            }
        }
    }
}

// Function to reset
function resetGame() {
    randomNumber = Math.floor(Math.random() * 200) + 1; // Generate a new random number
    chancesLeft = 10; // Reset chances
    document.getElementById("chances-count").textContent = chancesLeft;
    document.getElementById("guess").value = ''; // Clear input field
}

// Add event listener for the "Check" button
document.getElementById("check-btn").addEventListener("click", checkGuess);
