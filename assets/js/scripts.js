var choiceOne = document.getElementById('one');
var choiceTwo = document.getElementById('two');
var choiceThree = document.getElementById('three');
var choiceFour = document.getElementById('four');
var question = document.getElementsByTagName('h2')[0];
var nextButton = document.getElementsByClassName('next')[0];
var prevButton = document.getElementsByClassName('prev')[0];

choiceOne.innerText = 'Hello world!';
choiceTwo.innerText = 'Dave Regg';
choiceThree.innerText = 'Yo momma';
choiceFour.innerText = 'Donald Duck';
question.innerText = 'Who is the President of the United States?';

window.onload = function() {
    question.innerText = 'What is Dave Regg\'s favorite color?';
    choiceOne.innerText = 'Red!';
    choiceTwo.innerText = 'Orange!';
    choiceThree.innerText = 'Yellow!';
    choiceFour.innerText = 'Green!';
}

nextButton.addEventListener('click', function(ev) {
    question.innerText = 'What time is it?';
    choiceOne.innerText = 'Adventure Time!';
    choiceTwo.innerText = 'Time to code!';
    choiceThree.innerText = 'Peanut jelly time!';
    choiceFour.innerText = 'All I want for Christmas is my two front teeth.';
});

prevButton.addEventListener('click', function(ev) {
    question.innerText = 'What is Dave Regg\'s favorite color?';
    choiceOne.innerText = 'Red!';
    choiceTwo.innerText = 'Orange!';
    choiceThree.innerText = 'Yellow!';
    choiceFour.innerText = 'Green!';
});