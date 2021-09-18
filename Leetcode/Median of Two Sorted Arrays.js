var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [...nums1,...nums2].sort((a,b) => a - b);
    let len = nums.length;
    if(len%2 == 0) {
        let left = len/2 - 1;
        let right = len/2;
        return (nums[left] + nums[right])/2;
    }
    else{
        let mid = (len-1)/2;
        return nums[mid];
    }
};