let calcNum = (num, operationString) => {
	if(!operationString) //its undefined
		return num;
	
	return parseInt(eval("" + num + operationString));
}
let one, two, three, four, five, six, seven, eight, nine;
one = function(opr) {
	return calcNum(1, opr);
}
two = function(opr) {
	return calcNum(2, opr);
}
three = function(opr) {
	return calcNum(3, opr);
}
four = function(opr) {
	return calcNum(4, opr);
}
five = function(opr) {
	return calcNum(5, opr);
}
six = function(opr) {
	return calcNum(6, opr);
}
seven = function(opr) {
	return calcNum(7, opr);
}
eight = function(opr) {
	return calcNum(8, opr);
}
nine = function(opr) {
	return calcNum(9, opr);
}
//Next, the operators
let plus, minus, times, dividedBy;
plus = function(num) {
	return ` + ${num}`;
}
minus = function(num) {
	return ` - ${num}`;
}
times = function(num) {
	return ` * ${num}`;
}
dividedBy = function(num) {
	return ` / ${num}`;
}