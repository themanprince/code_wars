function splitAndMerge(string, sep) {
	let resArr /*resulting array*/ = string.split(" ");
	let newRes = resArr.map(el => el.split("").join(sep));
	return newRes.join(" ");
}
