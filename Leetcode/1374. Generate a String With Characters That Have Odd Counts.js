// ct : easy
var generateTheString = function(n) {
    let s = ''
    for(let i = 1; i<=n-1; i++){
        s+='a';
    }
    return n%2 === 0 ? s+'b' : s+'a';
};