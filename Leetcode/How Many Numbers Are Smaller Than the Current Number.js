var smallerNumbersThanCurrent = function(nums) {
	return nums.map(curr => nums.filter(num => curr > num).length)
};