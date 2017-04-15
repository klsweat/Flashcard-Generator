// require the inquirer package
var inquirer = require('inquirer');

//import the flashacards created from constructors
var runFlashCards = require('./flashcardConstructors.js');

//import the clozecard questions object
var questions = require('./questions.js').questions;

//and empty array that will hold the question with deleted answer
var clozeQuestions = [];

// push the cloze questions to the empty array
for (var i = 0; i < questions.length; i++){
    var q = new runFlashCards.ClozeCard(questions[i].full, questions[i].cloze);
    clozeQuestions.push(q);
}

// What question the user is currently on
var questionNow = 0;

//Number of correct questions answered
var correct = 0;

//Number of incorrect questions answered
var incorrect = 0;

// flipcard function prompts question and requires a user input
function flipCard(){
    inquirer.prompt([
        {
            type: 'input', //type of question asked
            message: clozeQuestions[questionNow].partial + '\nAnswer: ', // calls the array and sets the index of the array to the current question
            name: 'userGuess' //value name
        }

    ]).then(function (answers){
        console.log('\n');
        //check to see if user input is correct
        if (answers.userGuess.toLowerCase() === clozeQuestions[questionNow].cloze.toLowerCase()){
            console.log('CORRECT');
            correct++;
            console.log('\n');
        } else {
            console.log('INCORRECT');
            incorrect++;
            console.log('\n');
        }
        //prints out correct answer
        console.log("Correct Answer: ");
        console.log(clozeQuestions[questionNow].full);
        console.log('\n');
        console.log('------------------------------');
        console.log('\n');

        //go to next questions
        if(questionNow < clozeQuestions.length -1){
            questionNow++;
            flipCard();
        } else {
            console.log("You need to study some more.");
            console.log("Total Correct: " + correct);
            console.log("Incorrect Answers: " + incorrect);
        }
    });
}

//Begin Studying your FlashCards
flipCard();