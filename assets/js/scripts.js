/*

TODO:
1. Create a page for when the user completes the quiz

*/

// global variables
var count; 
var choices, choiceOne, choiceTwo, choiceThree, choiceFour, question, answer;
var nextButton, prevButton, progress, progressBar, progressPercentage, score, scorePercentage;
count = 0;
score = 0;
scorePercentage = Math.round(score/20);


// grab html elements
choices = document.querySelectorAll('.choices');
question = document.getElementsByTagName('h2')[0];
nextButton = document.getElementsByClassName('next')[0];
prevButton = document.getElementsByClassName('prev')[0];
progressBar = document.getElementsByClassName('progress')[0];
progress = document.getElementsByClassName('progress-bar')[0];


// add the event listeners
window.onload = renderQuestion();
nextButton.addEventListener('click', nextQuestion);
prevButton.addEventListener('click', prevQuestion);

choices.forEach(function(choice) {
    choice.addEventListener('click', scoring);
});


// functions used
function nextQuestion() {
    count++;
    if (count >= 20) {
        count = 19;
    }
    
    renderQuestion();
}

function prevQuestion() {
    count--;
    if (count < 0) {
        count = 0;
    }
    
    renderQuestion();
}




function renderQuestion() {
    question.innerText = questions[count].question;
    
    choices.forEach(function(choice, i) {
        choice.innerText = questions[count].choices[i];
    });
    
    updateProgress();
}




function updateProgress() {
    progressPercentage = Math.round((count/20) * 100);
    progress.style.width = progressPercentage + '%';
}



function scoring() {
    answer = questions[count].answer;
    
    if (this.innerText === questions[count].choices[answer]) {
        score++;
    } else {
        score = score;
    }
    
    nextQuestion();
}