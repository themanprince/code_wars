function num(addr1, addr2) {
	let sum = (addr) => addr.split(".").reduce((sum, curr, i) => sum + (256**(3-i) * parseInt(curr)), 0);
	return sum(addr2) - sum(addr1);
};
console.log(num("10.0.0.0", "11.0.0.0"));