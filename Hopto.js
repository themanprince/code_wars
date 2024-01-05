function hopto(num, count=0) {
	if(num == 1)
		return count;
	
	return hopto(((num%2) == 0)?num/2:(3*num)+1, ++count);
}