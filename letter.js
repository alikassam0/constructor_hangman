function Letter(character) {
	this.character = character;
	this.guessed = false;
}

Letter.prototype.displayLetter = function() {
	if (this.guessed) {
		return this.character + " "
	} else {
		return "_ "
	}
}

Letter.prototype.checkCharacter = function(userguess) {
	if (userguess === this.character) {
		this.guessed = true;
	}
}

module.exports = Letter;