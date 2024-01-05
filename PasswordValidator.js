//I couldnt solve this one
//The regex here is copied... it uses look-aheads
let validate = function(password) {
	return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password);
}