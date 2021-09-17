const findDisappearedNumbers = (nums) => {
    nums.sort((a, b) => a - b);
    const arr = new Map();
    const result = [];
  
    for (let i = 0; i < nums.length; i++) {
      arr.set(nums[i], i);
    }
  
    for (let i = 1; i <= nums.length; i++) {
      if (!arr.has(i)) result.push(i);
    }
  
    return result;
    
  };