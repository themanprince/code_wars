function alphanumeric(string) {
	return !(/[_\s]/.test(string));
}

/*shit i learned here is... if youre
to check that a string doesnt have x,
check that it has x, then return false
if it does...*/