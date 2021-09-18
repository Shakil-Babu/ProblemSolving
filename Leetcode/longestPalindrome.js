var longestPalindrome = function(s) {
    let map = {};
    for(let i of s){
        map[i] = map[i]? map[i]+1: 1;
    }
    let count = 0;
    let flag = 0;
    for(let i in map){
        if(map[i]%2 == 0) count += map[i];
        else {
            count += map[i] -1;
            flag = 1;
        }
    }
    return count+flag;
};

let r = longestPalindrome("abccccdd");
console.log(r);