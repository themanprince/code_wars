function prime(number) {
	let result = [];
	for(let i = 1; i < number; i++) {
		let isPrime = true;
		let itsRoot = Math.round(Math.sqrt(i));
		for(let b = 2; b <= itsRoot; b++) {
			if(i%b == 0) {
				isPrime = false;
				break;
			}
		}
		
		if(isPrime)
			result.push(i);
	}
	return result;
}
