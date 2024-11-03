// start playing
function play() {
    const addHidden = document.getElementById("play-start");
    addHidden.classList.add("hidden");
    
    const removeHidden = document.getElementById("plaground");
    removeHidden.classList.remove('hidden');
    
    const addHiddenFinalScore = document.getElementById("final-score-section");
    addHiddenFinalScore.classList.add("hidden");

    const setDefaultLife = document.getElementById("default-life");
    setDefaultLife.innerText = 5;

    const setDefaultScore = document.getElementById("default-score");
    setDefaultScore.innerText = 0;


    continueGame();

}

// set button background color
function setBGColorById(elementId) {
    // console.log(elementId);
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-400");
}
// remove btn bg color by id
function removeBGColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("bg-orange-400");
}

// generate a random alphabet
function generateRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumbers = Math.random() * 25;
    const index = Math.floor(randomNumbers);

    const alphabet = alphabets[index];
    return alphabet

}


function continueGame() {
    const alphabet = generateRandomAlphabet();

    const currentAlphabetElement = document.getElementById("current-alphabet");
    currentAlphabetElement.innerText = alphabet;

    setBGColorById(alphabet);


}

document.addEventListener('keyup', function handleKeyboardBtnPressed(event) {

    const playerPressed = event.key;

    if(playerPressed === "Escape"){
        gameOver();

    }

    // current alphabet
    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(expectedAlphabet);

    if (playerPressed === expectedAlphabet) {
        // score set
        const defaultScoreElemnt = document.getElementById("default-score");
        const defaultScoreText = defaultScoreElemnt.innerText;
        const defaultScore = parseInt(defaultScoreText);
        // console.log(defaultScore);
        const finalSore = defaultScore + 1;

        defaultScoreElemnt.innerText = finalSore;

        const showFinalScore = document.getElementById("final-score");
        showFinalScore.innerText = finalSore;

        removeBGColorById(expectedAlphabet);
        continueGame();
    } else {
        const currentLifeElement = document.getElementById("default-life");
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const availableLife = currentLife - 1;

        currentLifeElement.innerText = availableLife;

        if (availableLife === 0) {
            gameOver();
        }
    }
})

function playAgain() {
    
    play();
}



function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElemntTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}


function gameOver() {
    const removePlaygroundSection = document.getElementById("plaground");
    removePlaygroundSection.classList.add("hidden");

    const showFinalScoreBoard = document.getElementById("final-score-section");
    showFinalScoreBoard.classList.remove("hidden");

    const currentAlphabet = getElemntTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBGColorById(currentAlphabet);

}