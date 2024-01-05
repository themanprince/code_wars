let romanShit = function(roman) {
	//for case insensitivity
	roman = roman.toLowerCase();
	//a dictionary for roman values
	let dict = new Map();
	dict.set("i", 1);
	dict.set("v", 5);
	dict.set("x", 10);
	dict.set("l", 50);
	dict.set("c", 100);
	dict.set("d", 500);
	dict.set("m", 1000);
	//first setting sum to the last num in the supplied roman numeral arguments
	let sum = dict.get(roman[roman.length - 1]);
	for(let i = roman.length - 1; i > 0; i--) { //going backwards
		let curr = dict.get(roman[i]); //current
		let prev;
		if((prev = dict.get(roman[i - 1])) >= curr)
			sum += prev;
		else
			sum -= prev;
		
		
	}
	return sum;
};