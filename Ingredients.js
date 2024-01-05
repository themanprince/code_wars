function ingredients(a, stock) {
	let smallest;
	for(let key of Object.keys(a)) {
		let avail; //amount of this ingrrdient that is available
		if(key in stock) {
			if((avail = parseInt(stock[key]/a[key])) < smallest || smallest == undefined)
				smallest = avail;
		} else
			return 0; //a missingingredient
	}
	return smallest;
}