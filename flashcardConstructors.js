//BasicCard constructor
//arguments show the questions and answer written on cards
exports.BasicCard = function(front, back){
    this.front = front;
    this.back = back;
}

//ClozeCard constructor
exports.ClozeCard = function(text, cloze){
  
    //grab user text and make it lowercase
   var textLowercase = text.toLowerCase();
    var clozeLowercase = cloze.toLowerCase();

    //check and make sure that the cloze appears in the text
    if(!textLowercase.includes(clozeLowercase)){
        console.log("The cloze card is not in the text");
        return;
    }

      //constructor objects and properties
    this.full = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, '________');



}

