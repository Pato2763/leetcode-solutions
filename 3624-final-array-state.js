var getFinalState = function (nums, k, multiplier) {
  for (let i = 0; i < k; i++) {
    const lowest = Math.min(...nums);
    nums[nums.indexOf(lowest)] = nums[nums.indexOf(lowest)] * multiplier;
  }
  return nums;
};

const nums = [2, 1, 3, 5, 6];

console.log(getFinalState(nums, 5, 2));
