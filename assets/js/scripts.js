/*

TODO:
1. prevButton will need to remove a score if the correct answer was picked
    maybe use a flag as a "correct answer was clicked"
    only allow prevButton for the question you are on
2. resetQuiz on completion page
3. Comment functions so you know what's goin' on

*/

// global variables
var count, score, scorePercentage, html; 
var choices, question, answer, resultsPara, choicesPara;
var quizDiv, resetButton, prevButton, progress, progressBar, progressPercentage;
count = 0;
score = 0;



// grab html elements
choices = document.querySelectorAll('.choices');
question = document.getElementsByTagName('h2')[0];
resultsPara = document.getElementsByTagName('p')[0];
choicesPara = document.getElementsByTagName('p')[1];
resetButton = document.getElementsByClassName('reset')[0];
prevButton = document.getElementsByClassName('prev')[0];
progressBar = document.getElementsByClassName('progress')[0];
progress = document.getElementsByClassName('progress-bar')[0];
quizDiv = document.getElementsByClassName('quiz')[0];



// add the event listeners
window.onload = renderQuestion();

prevButton.addEventListener('click', prevQuestion);
resetButton.addEventListener('click', resetQuiz);
choices.forEach(function(choice) {
    choice.addEventListener('click', scoring);
});



// functions used
function nextQuestion() {
    count++;
    
    if (count > 20) {
        count = 20;
    } else if (count !== 20) {
        renderQuestion();
    } else if (count === 20) {
        renderCompletion();
    }
}

function prevQuestion() {
    count--;
    if (count < 0) {
        count = 0;
    }
    
    renderQuestion();
}




function renderQuestion() {
    if (count === 0) {
        prevButton.classList.add('hide');
    } else if (prevButton.classList.contains('hide')) {
        prevButton.classList.remove('hide');
    }
    
    question.innerText = questions[count].question;
    
    choices.forEach(function(choice, i) {
        choice.innerText = questions[count].choices[i];
    });
    
    updateProgress();
}

function renderCompletion() {
    updateProgress();
    scorePercentage = Math.round(score/20 * 100) + '%';
    
    question.innerText = 'Thank you for Completing the Quiz!';
    resultsPara.innerText = 'Your score is: ' + scorePercentage;
    
    choicesPara.classList.add('hide');
    prevButton.classList.add('hide');
    resetButton.classList.remove('hide');
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



function updateProgress() {
    progressPercentage = Math.round((count/20) * 100);
    progress.style.width = progressPercentage + '%';
}


function resetQuiz() {
    count = 0;
    score = 0;
    
    resultsPara.innerText = '';
    
    choicesPara.classList.remove('hide');
    resetButton.classList.add('hide');
    renderQuestion();
}