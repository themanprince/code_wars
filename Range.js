function solution(list, interArr = []) {
	if(!list.length) return interArr.join(",");
	let index = 0, count = 1;
	for( ; (++index < list.length) && (list[index] - list[index-1] == 1) ; count++);
	//what this for loop above does is that while next element exists and is consecutive, increment count
	//the next line is exactly why nested ternaries are a bad idea
	interArr.push((count >= 3)?`${list[0]}-${list[count-1]}`:`${list[0]}${(count-1 != 0)?`,${list[count-1]}`:''}`);
	return solution(list.slice(count), interArr);
}