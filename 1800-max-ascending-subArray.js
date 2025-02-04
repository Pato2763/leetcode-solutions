const maxAscendingSum = (nums) => {
  if (nums.length === 1) return nums[0];
  let maxSum = 0;
  let currSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currSum += nums[i];
    } else {
      currSum = nums[i];
    }
    if (currSum > maxSum) {
      maxSum = currSum;
    }
  }
  return maxSum;
};

const arr = [10, 20, 30, 5, 10, 50];
console.log(maxAscendingSum(arr));
