/*

TODO:

*/

// global variables
var count, score, scorePercentage, answer; // tracking variables
var correctAnswer, prevFlag; // flags
var choices, question, resultsPara, choicesPara; // elements being updated
var resetButton, prevButton; // buttons
var progress, progressPercentage; // progress bar
// set tracking variables
count = 0;
score = 0;
correctAnswer = false;
prevFlag = false;



// grab html elements
choices = document.querySelectorAll('.choices');
question = document.getElementsByTagName('h2')[0];
resultsPara = document.getElementsByTagName('p')[0];
choicesPara = document.getElementsByTagName('p')[1];

resetButton = document.getElementsByClassName('reset')[0];
prevButton = document.getElementsByClassName('prev')[0];
progress = document.getElementsByClassName('progress-bar')[0];



// add the event listeners
window.onload = renderQuestion();

prevButton.addEventListener('click', prevQuestion);
resetButton.addEventListener('click', resetQuiz);
choices.forEach(function(choice) {
    choice.addEventListener('click', scoring);
});



// functions used
function scoring() {
    // grab the answer of the current question
    answer = questions[count].answer;
    // prevButton is visible when a choice is selected
    prevFlag = true;
    
    // THIS is the span.choice that the user clicked
    if (this.innerText === questions[count].choices[answer]) {
        // correctAnswer waves for prevButton use
        correctAnswer = true;
        score++;
    } else {
        correctAnswer = false;
    }
    
    // then render next question
    nextQuestion();
}



function nextQuestion() {
    // count goes up
    count++;
    
    if (count > 20) {
        count = 20;
    } else if (count !== 20) {
        // numbers between 0 and 20 have questions that can be rendered
        renderQuestion();
    } else if (count === 20) {
        // quiz is over when count reaches 20
        renderCompletion();
    }
}



// the prevButton will only be available to go back one question
function prevQuestion() {
    // when the previous question renders, remove the prevButton
    prevFlag = false;
    
    // if the user originally clicked the correctAnswer, remove score
    if (correctAnswer) {
        correctAnswer = false;
        score--;
    }
    
    // then go back and render the old question
    count--;
    renderQuestion();
}




function renderQuestion() {
    
    // prevButton is hidden on the first page
    // and if the user attempts to go back more than one question
    if (!prevFlag) {
        prevButton.classList.add('hide');
    } else if (prevButton.classList.contains('hide')) {
        prevButton.classList.remove('hide');
    }
    
    // update question div with current question
    question.innerText = questions[count].question;
    
    // update each choice with the choices available in current question
    choices.forEach(function(choice, i) {
        choice.innerText = questions[count].choices[i];
    });
    
    updateProgress();
}

function renderCompletion() {
    updateProgress();
    scorePercentage = Math.round(score/20 * 100) + '%';
    
    // update with a thank you note and the user's percentage
    question.innerText = 'Thank you for Completing the Quiz!';
    resultsPara.innerText = 'Your score is: ' + scorePercentage;
    
    // reset avail, prevButton and choicesPara are removed
    choicesPara.classList.add('hide');
    prevButton.classList.add('hide');
    resetButton.classList.remove('hide');
}



function updateProgress() {
    // progress bar will be updated as count goes up
    progressPercentage = Math.round((count/20) * 100);
    progress.style.width = progressPercentage + '%';
}


function resetQuiz() {
    // reset tracking variables
    count = 0;
    score = 0;
    correctAnswer = false;
    prevFlag = false;
    
    // resultsPara is hidden
    resultsPara.innerText = '';
    
    // choicesPara displays while resetButton is hidden
    choicesPara.classList.remove('hide');
    resetButton.classList.add('hide');
    
    renderQuestion();
}