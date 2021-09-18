
var maxProductDifference = function(nums) {
    let l = nums.sort((a,b) => b-a).slice(0,2).reduce((a,b) => a*b);
    let s = nums.sort((a,b) => a-b).slice(0,2).reduce((a,b) => a*b);
    return l-s;
};