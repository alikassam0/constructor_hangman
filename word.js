var Letter = require("./letter");

function Word(character) {
this.character = character;
this.letterArray = [];
this.guessesMade = "";
	for(var i = 0; i < this.character.length; i++) {
		this.letterArray.push(new Letter(this.character[i]))
	}
}

Word.prototype.toString = function (){
	var output = ""
	for (var i = 0; i < this.letterArray.length; i++) {
		output += this.letterArray[i].displayLetter();
	}
	return output;
}

Word.prototype.findLetter = function(keyStroke){
	var lowerLetter = keyStroke.toLowerCase();
	if (this.guessesMade.indexOf(lowerLetter) > -1) {
		return console.log("***********Duplicate, pick another letter***********");
	} else {
    this.guessesMade += lowerLetter;
    for(var i=0; i<this.letterArray.length;i++){
      if(this.letterArray[i].character.toLowerCase() === lowerLetter){
      this.letterArray[i].guessed = true;
      }
    }
  }
};

Word.prototype.isComplete = function(){
	for(var i = 0; i < this.letterArray.length; i++){
		if(this.letterArray[i].guessed === false) {
      return false;
    }
	}
  return true;
}

module.exports = Word;

