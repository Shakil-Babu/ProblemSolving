let cmap = (str) => {
    let map = {};
    for(let char of str){
        map[char] ? map[char]++ : map[char] = 1;
    }
    return map;
}
var numJewelsInStones = function(jewels, stones) {
    let a = jewels.split("");
    let b = cmap(stones);

    let arr = [];
    let i  = 0;
    for(let key in b){
        if(a.includes(key)){
            arr.push(b[key]);
        }
        i++;
    }

    if(arr.length === 0) return 0;
    return arr.reduce((a,b) => a+b);

};