function count(A) {
	let theMap = new Map(), done = []; //done is to prevent same integer from being checked twice
	A.forEach(el => {
		if(done.some(e => e == el))
			return; //its been visited before
		let newArr = A.filter(e => e == el);
		theMap.set(el, newArr.length);
	});

	for(let item of A) {
		let curr;
		if(((curr = theMap.get(item)) % 2) != 0) {
			return item;
		}
	}
}

let arr = [1, 2, 1];
console.log(arr);
console.log(count(arr));