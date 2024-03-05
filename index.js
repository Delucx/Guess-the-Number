const easy = document.getElementById('easy');
const normal = document.getElementById('normal');
const hard = document.getElementById('hard');
const extreme = document.getElementById('extreme');

const timerDisplay = document.getElementById('timerDisplay');
const guessNumber = document.getElementById('guessNumber');
const message = document.getElementById('message');
const checkNumber = document.getElementById('checkNumber');
const tryAgain = document.getElementById('tryAgain');
const reset = document.getElementById('resetGame');
const guessedNumber = document.getElementById('guessedNumber');
const guessesCount = document.getElementById('guessesCount');
guessedNumber.textContent = 0;
guessesCount.textContent = 0;
let timer;
let countdown1;
let countdown2;
let randomNumber;
let easyAgain = false;
let normalAgain = false;
let hardAgain = false;
let extremeAgain = false;
let easyNumber;
let normalNumber;
let hardNumber;
let extremeNumber;

function generateEasyRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function generateNormalRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function generateHardRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
}

function generateExtremeRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
}

function offGuessNumber() {
    guessNumber.disabled = true;
    guessNumber.style.backgroundColor = '#555555';
    guessNumber.style.scale = '1';
    guessNumber.style.filter = 'blur(5px)';
}

function onGuessNumber() {
    guessNumber.disabled = false;
    guessNumber.style.backgroundColor = '';
    guessNumber.style.scale = '';
    guessNumber.style.filter = '';
}

function offCheckNumber() {
    checkNumber.disabled = true;
    checkNumber.style.backgroundColor = '#555555';
    checkNumber.style.scale = '1';
    checkNumber.style.filter = 'blur(5px)';
}

function onCheckNumber() {
    checkNumber.disabled = false;
    checkNumber.style.backgroundColor = '';
    checkNumber.style.scale = '';
    checkNumber.style.filter = '';
}

function offTryAgain() {
    tryAgain.disabled = true;
    tryAgain.style.background = '#555555';
    tryAgain.style.scale = '1';
    tryAgain.style.filter = 'blur(5px)';
}

function onTryAgain() {
    tryAgain.disabled = false;
    tryAgain.style.background = '';
    tryAgain.style.scale = '';
    tryAgain.style.filter = '';
}

function offReset() {
    reset.disabled = true;
    reset.style.background = '#555555';
    reset.style.scale = '1';
    reset.style.filter = 'blur(5px)';
}

function onReset() {
    reset.disabled = false;
    reset.style.background = '';
    reset.style.scale = '';
    reset.style.filter = '';
}

function winScoreBoard() {
    if (easyAgain == true) {
        return guessedNumber.textContent = parseInt(guessedNumber.textContent) + 1;
    }

    if (normalAgain == true) {
        return guessedNumber.textContent = parseInt(guessedNumber.textContent) + 1;
    }

    if (hardAgain == true) {
        return guessedNumber.textContent = parseInt(guessedNumber.textContent) + 1;
    }

    if (extremeAgain == true) {
        return guessedNumber.textContent = parseInt(guessedNumber.textContent) + 1;
    }
}

function loseScoreBoard() {
    if (easyAgain == true) {
        return guessesCount.textContent = parseInt(guessesCount.textContent) + 1;
    }

    if (normalAgain == true) {
        return guessesCount.textContent = parseInt(guessesCount.textContent) + 1;
    }

    if (hardAgain == true) {
        return guessesCount.textContent = parseInt(guessesCount.textContent) + 1;
    }

    if (extremeAgain == true) {
        return guessesCount.textContent = parseInt(guessesCount.textContent) + 1;
    }
}

offGuessNumber();
offCheckNumber();
offTryAgain();
offReset();

easy.addEventListener('click', function () {
    if (easy) {
        easyNumber = generateEasyRandomNumber();
        console.log(easyNumber);
        guessNumber.placeholder = 'Enter a number between 1 and 10';
        onGuessNumber();
        onCheckNumber();
        onTryAgain();
        onReset();
        easyAgain = true;
        normalAgain = false;
        hardAgain = false;
        extremeAgain = false;
        easy.disabled = true;
        normal.disabled = true;
        hard.disabled = true;
        extreme.disabled = true;
        easy.style.backgroundColor = '#019212';
        easy.style.scale = '1.2';
        easy.style.filter = 'blur(0px)';
        normal.style.backgroundColor = '#565900';
        normal.style.scale = '1';
        normal.style.filter = 'blur(5px)';
        hard.style.backgroundColor = '#5b2f00';
        hard.style.scale = '1';
        hard.style.filter = 'blur(5px)';
        extreme.style.backgroundColor = '#5f0000';
        extreme.style.scale = '1';
        extreme.style.filter = 'blur(5px)';
    }
});

normal.addEventListener('click', function () {
    if (normal) {
        normalNumber = generateNormalRandomNumber();
        console.log(normalNumber);
        guessNumber.placeholder = 'Enter a number between 1 and 100';
        onGuessNumber();
        onCheckNumber();
        onTryAgain();
        onReset();
        easyAgain = false;
        normalAgain = true;
        hardAgain = false;
        extremeAgain = false;
        easy.disabled = true;
        normal.disabled = true;
        hard.disabled = true;
        extreme.disabled = true;
        easy.style.backgroundColor = '#019212';
        easy.style.scale = '1';
        easy.style.filter = 'blur(5px)';
        normal.style.backgroundColor = '#565900';
        normal.style.scale = '1.2';
        normal.style.filter = 'blur(0px)';
        hard.style.backgroundColor = '#5b2f00';
        hard.style.scale = '1';
        hard.style.filter = 'blur(5px)';
        extreme.style.backgroundColor = '#5f0000';
        extreme.style.scale = '1';
        extreme.style.filter = 'blur(5px)';
    }
});

hard.addEventListener('click', function () {
    if (hard) {
        hardNumber = generateHardRandomNumber();
        console.log(hardNumber);
        guessNumber.placeholder = 'Enter a number between 1 and 1000';
        onGuessNumber();
        onCheckNumber();
        onTryAgain();
        onReset();
        easyAgain = false;
        normalAgain = false;
        hardAgain = true;
        extremeAgain = false;
        easy.disabled = true;
        normal.disabled = true;
        hard.disabled = true;
        extreme.disabled = true;
        easy.style.backgroundColor = '#019212';
        easy.style.scale = '1';
        easy.style.filter = 'blur(5px)';
        normal.style.backgroundColor = '#565900';
        normal.style.scale = '1';
        normal.style.filter = 'blur(5px)';
        hard.style.backgroundColor = '#5b2f00';
        hard.style.scale = '1.2';
        hard.style.filter = 'blur(0px)';
        extreme.style.backgroundColor = '#5f0000';
        extreme.style.scale = '1';
        extreme.style.filter = 'blur(5px)';
    }
});

extreme.addEventListener('click', function () {
    if (extreme) {
        extremeNumber = generateExtremeRandomNumber();
        console.log(extremeNumber);
        guessNumber.placeholder = 'Enter a number between 1 and 1000';
        onGuessNumber();
        onCheckNumber();
        onTryAgain();
        onReset();
        easyAgain = false;
        normalAgain = false;
        hardAgain = false;
        extremeAgain = true;
        easy.disabled = true;
        normal.disabled = true;
        hard.disabled = true;
        extreme.disabled = true;
        easy.style.backgroundColor = '#019212';
        easy.style.scale = '1';
        easy.style.filter = 'blur(5px)';
        normal.style.backgroundColor = '#565900';
        normal.style.scale = '1';
        normal.style.filter = 'blur(5px)';
        hard.style.backgroundColor = '#5b2f00';
        hard.style.scale = '1';
        hard.style.filter = 'blur(5px)';
        extreme.style.backgroundColor = '#5f0000';
        extreme.style.scale = '1.2';
        extreme.style.filter = 'blur(0px)';

        // Print the timer every second
        let seconds = 60;
        timerDisplay.textContent = seconds;

        countdown1 = setInterval(() => {
            seconds = seconds - 0.1;
            timerDisplay.textContent = seconds.toFixed(1);

            if (seconds === 0) {
                clearInterval(countdown1);
                guessNumber.disabled = true;
                checkNumber.disabled = true;
            } else if (message.textContent === 'Congratulations! You guessed the number!') {
                clearInterval(countdown1);
            }
        }, 100);
    }
});

checkNumber.addEventListener('click', function () {
    const number = parseInt(guessNumber.value);

    if (easyAgain == true) {
        if (number >= 1 && number <= 10 && number !== '') {
            if (number === easyNumber) {
                message.textContent = 'Congratulations! You guessed the number!';
                message.style.color = 'green';
                checkNumber.disabled = true;
                checkNumber.style.backgroundColor = '#555555';
                checkNumber.style.scale = '1';
                checkNumber.style.filter = 'blur(5px)';
                guessNumber.disabled = true;

                guessedNumber.textContent = winScoreBoard();
            } else if (number > easyNumber) {
                message.textContent = 'Too high! Try again!';
                message.style.color = 'red';
                guessesCount.textContent = loseScoreBoard();
            } else {
                message.textContent = 'Too low! Try again!';
                message.style.color = 'red';
                guessesCount.textContent = loseScoreBoard();
            }

        } else {
            message.textContent = 'Please enter a number between 1 and 10';
            message.style.color = 'red';
        }
    }

    if (normalAgain == true) {
        if (number >= 1 && number <= 100 && number !== '') {
            if (number === normalNumber) {
                message.textContent = 'Congratulations! You guessed the number!';
                message.style.color = 'green';
                checkNumber.disabled = true;
                checkNumber.style.backgroundColor = '#555555';
                checkNumber.style.scale = '1';
                checkNumber.style.filter = 'blur(5px)';
                guessNumber.disabled = true;
                guessedNumber.textContent = winScoreBoard();
            } else if (number > normalNumber) {
                message.textContent = 'Too high! Try again!';
                message.style.color = 'red';
                guessesCount.textContent = loseScoreBoard();
            } else {
                message.textContent = 'Too low! Try again!';
                message.style.color = 'red';
                guessesCount.textContent = loseScoreBoard();
            }

        } else {
            message.textContent = 'Please enter a number between 1 and 100';
            message.style.color = 'red';
        }
    }

    if (hardAgain == true) {
        if (number >= 1 && number <= 1000 && number !== '') {
            if (number === hardNumber) {
                message.textContent = 'Congratulations! You guessed the number!';
                message.style.color = 'green';
                checkNumber.disabled = true;
                checkNumber.style.backgroundColor = '#555555';
                checkNumber.style.scale = '1';
                checkNumber.style.filter = 'blur(5px)';
                guessNumber.disabled = true;
                guessedNumber.textContent = winScoreBoard();
            } else if (number > hardNumber) {
                message.textContent = 'Too high! Try again!';
                message.style.color = 'red';
                guessesCount.textContent = loseScoreBoard();
            } else {
                message.textContent = 'Too low! Try again!';
                message.style.color = 'red';
                guessesCount.textContent = loseScoreBoard();
            }

        } else {
            message.textContent = 'Please enter a number between 1 and 1000';
            message.style.color = 'red';
        }
    }

    if (extremeAgain == true) {
        if (number >= 1 && number <= 1000 && number !== '') {
            if (number === extremeNumber) {
                message.textContent = 'Congratulations! You guessed the number!';
                message.style.color = 'green';
                checkNumber.disabled = true;
                checkNumber.style.backgroundColor = '#555555';
                checkNumber.style.scale = '1';
                checkNumber.style.filter = 'blur(5px)';
                guessNumber.disabled = true;
                guessedNumber.textContent = winScoreBoard();
            } else if (number > extremeNumber) {
                message.textContent = 'Too high! Try again!';
                message.style.color = 'red';
                guessesCount.textContent = loseScoreBoard();
            } else {
                message.textContent = 'Too low! Try again!';
                message.style.color = 'red';
                guessesCount.textContent = loseScoreBoard();
            }

        } else {
            message.textContent = 'Please enter a number between 1 and 1000';
            message.style.color = 'red';
        }
    }
});



tryAgain.addEventListener('click', function () {
    if (easyAgain == true) {
        easyNumber = generateEasyRandomNumber();
        console.log(easyNumber);
        guessNumber.value = '';
        message.textContent = '';
        checkNumber.disabled = false;
        checkNumber.style.backgroundColor = '';
        checkNumber.style.scale = '';
        checkNumber.style.filter = '';
        guessNumber.disabled = false;
    }

    if (normalAgain == true) {
        normalNumber = generateNormalRandomNumber();
        console.log(normalNumber);
        guessNumber.value = '';
        message.textContent = '';
        checkNumber.disabled = false;
        checkNumber.style.backgroundColor = '';
        checkNumber.style.scale = '';
        checkNumber.style.filter = '';
        guessNumber.disabled = false;
    }

    if (hardAgain == true) {
        hardNumber = generateHardRandomNumber();
        console.log(hardNumber);
        guessNumber.value = '';
        message.textContent = '';
        checkNumber.disabled = false;
        checkNumber.style.backgroundColor = '';
        checkNumber.style.scale = '';
        checkNumber.style.filter = '';
        guessNumber.disabled = false;
    }

    if (extremeAgain == true) {
        extremeNumber = generateExtremeRandomNumber();
        console.log(extremeNumber);
        guessNumber.value = '';
        message.textContent = '';
        checkNumber.disabled = false;
        checkNumber.style.backgroundColor = '';
        checkNumber.style.scale = '';
        checkNumber.style.filter = '';
        guessNumber.disabled = false;

        // Reset the timer
        clearInterval(countdown1);
        clearInterval(countdown2);
        let seconds = 60;
        timerDisplay.textContent = seconds;

        countdown2 = setInterval(() => {
            seconds = seconds - 0.1;
            timerDisplay.textContent = seconds.toFixed(1);

            if (seconds === 0) {
                clearInterval(countdown2);
                guessNumber.disabled = true;
                checkNumber.disabled = true;
            } else if (message.textContent === 'Congratulations! You guessed the number!') {
                clearInterval(countdown2);
            }
        }, 100);
    }
});

reset.addEventListener('click', function () {
    if (reset) {
        offGuessNumber();
        offCheckNumber();
        offTryAgain();
        offReset();
        clearInterval(countdown1);
        clearInterval(countdown2);
        guessNumber.value = '';
        message.textContent = '';
        guessesCount.textContent = 0;
        guessedNumber.textContent = 0;
        checkNumber.disabled = false;
        guessNumber.disabled = false;
        easy.disabled = false;
        normal.disabled = false;
        hard.disabled = false;
        extreme.disabled = false;
        guessNumber.placeholder = '';
        timerDisplay.textContent = '';
        easy.style.backgroundColor = '#00600e';
        normal.style.backgroundColor = '#565900';
        hard.style.backgroundColor = '#5b2f00';
        extreme.style.backgroundColor = '#5f0000';
        easy.style.scale = '';
        normal.style.scale = '';
        hard.style.scale = '';
        extreme.style.scale = '';
        easy.style.background = '';
        normal.style.background = '';
        hard.style.background = '';
        extreme.style.background = '';
        easy.style.filter = '';
        normal.style.filter = '';
        hard.style.filter = '';
        extreme.style.filter = '';
    }
});