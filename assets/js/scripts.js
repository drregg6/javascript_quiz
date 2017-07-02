/*

TODO:


*/

// global variables
var count, score, scorePercentage, html; 
var choices, question, answer;
var quizDiv, nextButton, prevButton, progress, progressBar, progressPercentage;
count = 0;
score = 0;



// grab html elements
choices = document.querySelectorAll('.choices');
question = document.getElementsByTagName('h2')[0];
nextButton = document.getElementsByClassName('next')[0];
prevButton = document.getElementsByClassName('prev')[0];
progressBar = document.getElementsByClassName('progress')[0];
progress = document.getElementsByClassName('progress-bar')[0];
quizDiv = document.getElementsByClassName('quiz')[0];



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
    if (count > 20) {
        count = 20;
    } else if (count !== 20) {
        renderQuestion();
    } else if (count === 20) {
        renderCompletion();
    } 
    
//    renderQuestion();
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



function renderCompletion() {
    updateProgress();
    scorePercentage = Math.round(score/20 * 100) + '%';
    
    html = '<h2>Thank You for Completing the Quiz!</h2>';
    html += '<p>Your score is: ' + scorePercentage + '</p>';
    
    quizDiv.innerHTML = html;
}