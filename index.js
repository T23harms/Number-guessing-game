let userGuess = Math.round(Math.random() * 100);
let attempts = 0;
let winCount = 0;

const displayAttempts = document.getElementById('displayAttempts');
const displayWins = document.getElementById('displayWins');
const headline = document.getElementById('headline');
const myNumber = document.getElementById('myNumber');
const reset = document.getElementById('resetButton')
const reward = document.getElementById('rewardButton');
const img = document.getElementById('rewardImg');
const winSound = new Audio('sounds/winsound.wav');
const jumpscare = new Audio('sounds/jumpscare.wav');

function guessTheNumber() {
    attempts++;
    displayAttempts.innerHTML = 'Versuche: ' + attempts;

    if(userGuess == myNumber.value) {
        headline.innerHTML = 'Du hast gewonnen‼️🥳';
        let jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();   
        
        winCount++;
        displayWins.innerHTML = 'Wins: ' + winCount + '/3';
        winSound.play();

        if(winCount >= 3) {
            reward.style.display = 'block';
            reset.style.display = 'none';
        } else {
            reset.style.display = 'block';
        }
    } 

    else if(userGuess > myNumber.value) {
        headline.innerHTML = 'Die Zahl ist größer ⬆️';  
    } 

    else if(userGuess < myNumber.value) {
        headline.innerHTML = 'Die Zahl ist kleiner ⬇️';   
    } 

    myNumber.value = ' '; 
}

reset.addEventListener('click', resetGame);

function resetGame() {
    userGuess = Math.round(Math.random() * 100);
    attempts = 0;
    displayAttempts.innerHTML = 'Versuche: 0';
    headline.innerHTML = 'Rate die Zahl!';
    myNumber.value = ' ';
    reset.style.display = 'none';
}

reward.addEventListener('click', () => {
    img.style.display = 'block';
    

    setTimeout(() => {
        img.classList.add('show');
        jumpscare.play();
    }, 50);

    

    setTimeout(() => {
        img.classList.remove('show');
        img.style.display = 'none';
    }, 800);
})
