
//import the cloze and basiccard constructors
var flashCard = require('./flashcardConstructors.js');

console.log('     ');
console.log('BASIC CARDS');
console.log('     ');

//create a new flashcard from BasicCard constructor 
var firstPresident = new flashCard.BasicCard('Who was the first president of the United States?', 'George Washington');
console.log("Front: " + firstPresident.front);
console.log("Back: " + firstPresident.back); 
console.log('     ');
console.log('-----------------------------');
console.log('     ');

//create a new flashcard from BasicCard constructor 
var presidentTerms = new flashCard.BasicCard('Who was the only President to serve more than two terms?', 'Franklin D. Roosevelt');
console.log("Front: " + presidentTerms.front);
console.log("Back: " + presidentTerms.back);
console.log('     ');
console.log('-----------------------------');
console.log('     ');


//create a new flashcard from BasicCard constructor 
var oldPresident = new flashCard.BasicCard('Who was the oldest elected President?', 'Donald Trump');
console.log("Front: " + oldPresident.front);
console.log("Back: " + oldPresident.back);
console.log('     ');
console.log('-----------------------------');
console.log('-----------------------------');
console.log('     ');
console.log('CLOZE CARDS');
console.log('     ');

//CLOZE DELETED FLASHCARDS

//create a new flashcard from CLOZECARD constructor 
var firstPresident = new flashCard.ClozeCard('George Washington was the first president of the United States?', 'George Washington');
console.log("Full Text: " + firstPresident.full);
console.log("Cloze Text: " + firstPresident.cloze); 
console.log("Partial Text: " + firstPresident.partial); 
console.log('     ');
console.log('-----------------------------');
console.log('     ');


//create a new flashcard from CLOZECARD constructor 
var presidentTerms = new flashCard.ClozeCard('Franklin D. Roosevelt was the only President to serve more than two terms?', 'Franklin D. Roosevelt');
console.log("Full Text: " + presidentTerms.full);
console.log("Cloze Text: " + presidentTerms.cloze); 
console.log("Partial Text: " + presidentTerms.partial); 
console.log('     ');
console.log('-----------------------------');
console.log('     ');



//create a new flashcard from CLOZECARD constructor 
var oldPresident = new flashCard.ClozeCard('Donald Trump the oldest elected President?', 'Donald Trump');
console.log("Full Text: " + oldPresident.full);
console.log("Cloze Text: " + oldPresident.cloze); 
console.log("Partial Text: " + oldPresident.partial); 
console.log('     ');
console.log('-----------------------------');
console.log('     ');





