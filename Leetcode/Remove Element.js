function removeElement(nums, val) {
    let p1 = nums.length - 1;
    for (let i = nums.length - 1; i > -1; i--)
      if (nums[i] === val) nums[i] = nums[p1--];
    return p1 + 1;
  }
  