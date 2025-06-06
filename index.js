const numberToGuess = Math.round(Math.random() * 100);
let attempts = 0;

const displayAttempts = document.getElementById('displayAttempts');
const headline = document.getElementById('headline');
const myNumber = document.getElementById('myNumber');
const resetButton = document.getElementById('resetButton')

function guessTheNumber() {
    attempts = attempts + 1;
    displayAttempts.innerHTML = 'Versuche: ' + attempts;

    if(numberToGuess == myNumber.value) {
        headline.innerHTML = 'Du hast gewonnen‼️🥳';
        let jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();   
        resetButton.style.display = 'inline-block';
    } 

    if(numberToGuess > myNumber.value) {
        headline.innerHTML = 'Die Zahl ist größer ⬆️';  
    } 

    if(numberToGuess < myNumber.value) {
        headline.innerHTML = 'Die Zahl ist kleiner ⬇️';   
    } 

    myNumber.value = ' '; 
}

resetButton.addEventListener('click', () => {
    location.reload();
});
