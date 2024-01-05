let func = (n) => {
	if(("" + n).length == 1) //base case
		return n;
		
	let newArr = [...("" + n)]; //separating it
	//next, going recursively
	return func(newArr.reduce((a, b) => (parseFloat(b) + parseFloat(a))));
}