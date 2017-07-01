var count = 0;

var choices = document.querySelectorAll('.choices');
var question = document.getElementsByTagName('h2')[0];
var nextButton = document.getElementsByClassName('next')[0];
var prevButton = document.getElementsByClassName('prev')[0];

window.onload = function() {
    renderQuestion();
}

nextButton.addEventListener('click', function(ev) {
    count++;
    renderQuestion();
});

prevButton.addEventListener('click', function(ev) {
    count--;
    renderQuestion();
});



function renderQuestion() {
    question.innerText = questions[count].question;
    
    choices.forEach(function(choice, i) {
        choice.innerText = questions[count].choices[i];
    });
}