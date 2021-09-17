var intersection = function(nums1, nums2) {
    let smallArrr = nums1.length < nums2.length ? nums1 : nums2; 
    let largeArr = nums1.length > nums2.length ? nums1 : nums2;
    let result = [];
    largeArr.map((item, index) => {
        smallArrr.includes(item) && result.push(item);
    });
    let a = new Set(result);
    return [...a];
};