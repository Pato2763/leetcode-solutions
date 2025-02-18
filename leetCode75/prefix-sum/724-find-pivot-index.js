var pivotIndex = function (nums) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return 0;

  let forwardSum = new Array(nums.length).fill(0);
  forwardSum[0] = nums[0];

  let backwardsSum = new Array(nums.length).fill(0);
  backwardsSum[nums.length - 1] = nums[nums.length - 1];

  for (let i = 1; i < nums.length; i++) {
    forwardSum[i] = nums[i] + forwardSum[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    backwardsSum[i] = nums[i] + backwardsSum[i + 1];
  }
  console.log({ forwardSum, backwardsSum });

  for (let i = 0; i < nums.length; i++) {
    if (forwardSum[i] === backwardsSum[i]) return i;
  }
  return -1;
};

const arr = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(arr));
