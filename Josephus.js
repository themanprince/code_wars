function joseph(list, step) {
	let listToReturn = [], currIndex = 0;
	step--; //cus of zero-indexing
	let len;
	while(len = list.length) {
		let indexToRemove = step + currIndex;
		for(; indexToRemove >= len; indexToRemove -= len); //making sure we have valid indexToRemove
		listToReturn.push(list[indexToRemove]);
		list = list.filter((el, index) => !(index == indexToRemove)); //removing element at index to remove
		currIndex = indexToRemove;
	}
	return listToReturn;
}