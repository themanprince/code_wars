function uniqueInOrder(iterable, array = []) {
	
	//just for show off, I had to go recursively
	//base case here
	if(iterable.length == 1) {
		array.push(iterable[0]);
		return array;
	}
	
	let curr = iterable[0];
	if(curr == iterable[1])
		return uniqueInOrder(iterable.slice(1), array);
	
	array.push(curr);
	return uniqueInOrder(iterable.slice(1), array);
}
