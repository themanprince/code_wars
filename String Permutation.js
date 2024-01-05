//first move(), a helper method
function move(string, from, to) {
	string = [...string]; //dont blame me, strings are immutable
	while(from < to) {
		let holder = string[from];
		string[from] = string[from + 1];
		string[++from] = holder;
	}

	while(from > to) {
		let holder = string[from];
		string[from] = string[from - 1];
		string[--from] = holder;
	}
	
	return string.join("");
}

function permut(string) {
	let originalString = string, record = new Set();
	for(let i = 0; i < string.length; ++i) {
		let visited = new Set();
		originalString = move(originalString, i, 0); //not so original now, are you? hahaha
		let currInterString = originalString;
		record.add(originalString);
		//next loop goes like, "for every other char in original string asides first one which is our..."
		for(let k = 1; k < originalString.length; k++) {
			let final = string.length - 1; //helper for moving last char and recordng all its movements
			visited.add(currInterString[currInterString.length - 1]);
			for(let j = 0; j < string.length - 2; j++) {
				record.add(currInterString = move(currInterString, final, --final));
			}
		}
	}
	
	return [...record]; //since I have to return an array
}



//below is the pre-optimized version with time complexity of O(n^4)
/*function permut(string) {
	let originalString = string, record = new Set();
	for(let i = 0; i < string.length; ++i) {
		let visited = new Set();
		originalString = move(originalString, i, 0); //not so original now, are you? hahaha
		let currInterString = originalString;
		record.add(originalString);
		while([...originalString].some((el, i) => (i != 0) && (!visited.has(el)))) {
			let final = string.length - 1; //helper for moving last char and recordng all its movements
			visited.add(currInterString[currInterString.length - 1]);
			for(let j = 0; j < string.length - 2; j++) {
				record.add(currInterString = move(currInterString, final, --final));
			}
		}
	}
	
	return [...record]; //since I have to return an array
}*/