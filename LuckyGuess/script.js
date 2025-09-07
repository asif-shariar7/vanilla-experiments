const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const result = document.getElementById('result');

const random = Math.floor(Math.random()*100) + 1;

guessBtn.addEventListener('click', () => {

    const guess = parseInt(guessInput.value)

    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = 'Please enter a valid number between 1 and 100.';
        result.style.fontSize = "16px";
    } else if (guess === random) {
         result.textContent = 'Congratulations! You guessed the correct number!';
         result.style.fontSize= "16px";
         result.style.color = 'limegreen';
    } else if (guess > random) {
        result.textContent = 'Too high! Try again.';
        result.style.color = 'orange';
    } else {
        result.textContent = 'Too low! Try again.'
        result.style.color = 'orange';
    }
});