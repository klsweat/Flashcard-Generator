// require the inquirer package
var inquirer = require('inquirer');

//import the flashacards created from constructors
var runFlashCards = require('./flashcardConstructors.js');

var questions = require('./questions.js').questions;


//and empty array that will hold the question with deleted answer
var clozeQuestions = [];

// push the cloze questions to the empty array
for (var i = 0; i < questions.length; i++){
    var q = new runFlashCards.ClozeCard(questions[i].full, questions[i].cloze);
    clozeQuestions.push(q);
}

// What question the user is currently on
var currentQuestion = 0;
var correct = 0;
var incorrect = 0;

// front function asks question
function flipCard(){
    inquirer.prompt([
        {
            type: 'input',
            message: clozeQuestions[currentQuestion].partial + '\nAnswer: ',
            name: 'userGuess'
        }

    ]).then(function (answers){
        console.log('\n');
        //check to see if user input is correct
        if (answers.userGuess.toLowerCase() === clozeQuestions[currentQuestion].cloze.toLowerCase()){
            console.log('CORRECT');
            correct++;
        } else {
            console.log('INCORRECT');
            incorrect++;
        }
        //prints out correct answer
        console.log(clozeQuestions[currentQuestion].full);
    });
}

//Begin Studying your FlashCards
flipCard();