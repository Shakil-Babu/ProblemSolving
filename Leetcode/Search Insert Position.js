var searchInsert = function(nums, target) {
    let left =  0, right = nums.length - 1;
    let mid;
    while(left <= right){
        mid = Math.floor((left+right)/2);
        if(nums[mid] === target){
            return mid;
        }
        
        if(nums[mid] > target){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return left;
};