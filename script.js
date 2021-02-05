let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (guess, target) => Math.abs(target - guess);

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = getAbsoluteDistance(humanGuess, targetGuess);
    const computerDifference = getAbsoluteDistance(computerGuess, targetGuess);
    return humanDifference <= computerDifference;
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

const advanceRound = () => currentRoundNumber++;

console.log(compareGuesses(1, 2, 3));