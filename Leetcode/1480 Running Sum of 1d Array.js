var runningSum = function(nums) {
    let temp = [];
    for(let i = 1; i<nums.length; i++){
        temp.push(nums[i] += nums[i-1]);
    }

    return [nums[0], ...temp];
};