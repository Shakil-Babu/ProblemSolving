var thirdMax = function(nums) {
    let arr = nums.sort((a,b) => b-a);
    let a = [...new Set(arr)]
    if(a.length < 3) return a[0];
    else return a[2];
};