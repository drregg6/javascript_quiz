// global variables
var count, choices, question, nextButton, prevButton, progressBar;
count = 0;


// grab html elements
choices = document.querySelectorAll('.choices');
question = document.getElementsByTagName('h2')[0];
nextButton = document.getElementsByClassName('next')[0];
prevButton = document.getElementsByClassName('prev')[0];
progressBar = document.getElementsByClassName('progress-bar')[0];


// add the event listeners
window.onload = renderQuestion();
nextButton.addEventListener('click', nextQuestion);
prevButton.addEventListener('click', prevQuestion);


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
}