// Array of objects with each object being a new question with question, answer choices, and correct answer associated with it.
var questions = [
    new Question("What is the greatest Football club Ever?", ['Manchester United', 'Everton', 'Liverpool', 'Arsenal'], "Manchester United"),
    new Question("Who is the greatest Manager in league History?", ['Sir Alex Ferguson', 'Jürgen Klopp', 'Pep Guardiola', 'José Mourinho'], "Sir Alex Ferguson"),
    new Question("Which Team has the most trophies?", ['Manchester United', 'Chelsea', 'Liverpool', 'Arsenal'], "Manchester United"),
    new Question("Where is Old Trafford?", ['London', 'Liverpool', 'Manchester', 'Stoke'], "Manchester"),
    new Question("What Team last Won the Continental Treble?", ['Manchester United', 'Chelsea', 'Liverpool', 'Arsenal'], "Manchester United")
];


const timeEl = document.querySelector(".time"); 
const mainEl = document.getElementById("main"); 


var secondsLeft = 60; 

function setTime() {
    var timerInterval = setInterval(function() {
        // shows seconds left decreasing
        secondsLeft--;
        
        timeEl.textContent = secondsLeft + " seconds left!"; 

        // Alert "GAME OVER!" on 0 of timer
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("GAME OVER!") 
        }
    }, 1000); // time will decrease by one second
    
 }
    

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {

setTime();

    if(quiz.isEnded()) {
        showScores();
    }
    else {

        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
       
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>finalScore</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;

    localStorage.setItem('mostRecentScore', quiz.score); 

    return window.location.assign("./Fin.html"); 
};

var quiz = new Quiz(questions);

populate();