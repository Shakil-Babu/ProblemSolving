var findNumbers = function(nums) {
    let count = 0; 
    let arr = nums.map((item, index) => String(item).length % 2 === 0 && count++ );
    return count;
};