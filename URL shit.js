function addOrChangeUrlParameter(url, param) {
	//going to get the existing keys and values into a map... sort of
	//with a series of array methods
	let theSortaMap = (!url.includes('?')) ? []: url.slice(url.indexOf('?') + 1).split('&').map(pair => pair.split("="));
	let userParam = param.split('=');
	let found;
	if(found = theSortaMap.find(([key, value]) => key == userParam[0]))
		theSortaMap[theSortaMap.indexOf(found)] = userParam;
	else
		theSortaMap.push(userParam);
	let newParams = theSortaMap.map(([key, value]) => `${key}=${value}`).join("&");
	return (url.includes('?')) ? url.slice(0, url.indexOf('?') + 1) + newParams : url + '?' + newParams ;
}