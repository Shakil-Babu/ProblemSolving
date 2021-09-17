var twoSum = function(nums, target) {
    const arr = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i]+nums[j]  === target){
                arr.push(i,j)
            }
        }
    }
    const result = arr.slice(0,2);
    return result; 
};