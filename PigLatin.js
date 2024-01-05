let latin = text => {
	let newText = text.split(/\s/);
	 newText = newText.reduce((a, b) => {
		let ayShit; //this is final result of aying current word
		if(/\.|\,|\!|\?/.test(b) || b.length == 0) //filtering out punctuations
			ayShit = b;
		else {
			let [firstChar] = [...b]; //destructuring for first char
			ayShit = "" + (b.slice(1) + firstChar + "ay");
		}
		return a + ayShit + " ";
	}, "");
	return newText.trim();
}

console.log(latin("pig latin is cool"));