//global variables and locations to be used below

const username = document.getElementById('username');
const saveScoreButton = document.getElementById('saveScoreButton');
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');


const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5; // limit of high scores 

console.log(highScores);

finalScore.innerText = mostRecentScore;


username.addEventListener('keyup', () => {
    
});


saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score); // add score
    highScores.sort( (a,b) => b.score - a.score) // sort the high scores
    highScores.splice(5); // max 5 scores

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.href="./index.html";

    console.log(highScores);
}