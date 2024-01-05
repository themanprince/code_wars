function count(text) {
    let count = 0, visited = new Set();
    for(let c of text) {
        let char = c.toLowerCase();
        if(!visited.has(char)) {
            visited.add(char);
            //checking occurence of current char
            let occurence = 0;
            for(let c of text) {
                if(c.toLowerCase() == char)
                    occurence++;
            }
            if(occurence > 1)
                ++count;
        }
    }
    
    return count;
}

console.log(count("aabBcde"));