/*

TODO:
1. if (the clicked choice is correct)
        score = score + 1
    else
        score = score
2. Create a page for when the user completes the quiz

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
choiceOne = choices[0];
choiceTwo = choices[1];
choiceThree = choices[2];
choiceFour = choices[3];
question = document.getElementsByTagName('h2')[0];
nextButton = document.getElementsByClassName('next')[0];
prevButton = document.getElementsByClassName('prev')[0];
progressBar = document.getElementsByClassName('progress')[0];
progress = document.getElementsByClassName('progress-bar')[0];


// add the event listeners
window.onload = renderQuestion();
nextButton.addEventListener('click', nextQuestion);
prevButton.addEventListener('click', prevQuestion);
choices.forEach(function(choice, i) {
    choice.addEventListener('click', function(ev) {
        // var target = ev.target;
        // console.log(this);
        // console.log(questions[i].choices);
        scoring();
        
        // console.log(this.innerText);
        // console.log(questions[count].choices[answer]);
        // console.log(this.innerText === questions[count].choices[answer]);
        
        nextQuestion();
    });
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


// the other quiz had a param to keep track of the current question
// I'm totally against params because I want to continue using this

// choices will have two event listeners
    // one event listener to move to the next question
    // the other event listener will keep track of correct vs incorrect answers
function scoring() {
    answer = questions[count].answer;
    
    // needs to keep track of which choice is clicked
    // i is undefined in this function
    console.log(questions[count].choices[i]);
    console.log(this.answer);
    console.log(answer);
    // THIS means WINDOW here
    if (this.innerText === questions[count].choices[answer]) {
        score++;
    } else {
        score = score;
    }
}