// ct: easy
var isAnagram = function(s, t) {
    let ans = s.split("").sort().join("") === t.split("").sort().join("") ? true : false;
    return ans; 
};