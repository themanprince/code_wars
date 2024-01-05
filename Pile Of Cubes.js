function pile(m) {
	let sum = 0, counter = 1;
	while(true) {
		sum += (counter)**3; //cube counter, then add it to sum
		if(sum == m)
			return counter;
		if(sum > m)
			return -1;
		++counter;
	}
}