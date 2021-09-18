var buildArray = function(nums) {
    let ar = [];
    for(let i = 0; i<nums.length; i++){
        ar.push(nums[nums[i]]);
    }

    return ar;
};