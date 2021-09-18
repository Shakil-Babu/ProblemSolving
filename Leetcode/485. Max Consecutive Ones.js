
var findMaxConsecutiveOnes = function(nums) {
    let one = 0, zero =  0;
    let arr = [];
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === 1){
            one++;
            arr.push(one);
        }else{
            one = 0;
            arr.push(nums[i]);
        }
    }

    return arr.sort((a,b) => b-a)[0];
};