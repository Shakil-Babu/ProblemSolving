const cmap = (str) => {
    let map = {};
    for(let char of str){
        map[char] ? map[char]++ : map[char] = 1;
    }

    return map ;
}

var areOccurrencesEqual = function(s) {
   let smap = cmap(s);
   let vals = Object.values(smap);
   return ([...new Set(vals)].length === 1 ? true : false)
};
