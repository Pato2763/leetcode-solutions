const longestMonotonicSubarray = (nums) => {
  let increasing = undefined;
  let longestSubArray = 1;
  let currentSubArray = 1;
  for (let i = 1; i < nums.length; i++) {
    console.log("start", nums[i], {
      increasing,
      longestSubArray,
      currentSubArray,
    });
    if (increasing === undefined) {
      if (nums[i] > nums[i - 1]) {
        increasing = true;
        currentSubArray++;
      } else if (nums[i] < nums[i - 1]) {
        increasing = false;
        currentSubArray++;
      }
    } else if (nums[i] > nums[i - 1]) {
      if (increasing === true) {
        currentSubArray++;
      } else {
        currentSubArray = 2;
        increasing = true;
      }
    } else if (nums[i] < nums[i - 1]) {
      if (increasing === false) {
        currentSubArray++;
      } else {
        currentSubArray = 2;
        increasing = false;
      }
    } else {
      currentSubArray = 1;
      increasing = undefined;
    }
    if (currentSubArray > longestSubArray) longestSubArray = currentSubArray;
    console.log("end", { increasing, longestSubArray, currentSubArray });
  }
  return longestSubArray;
};

const nums = [1, 9, 7, 1];
console.log(longestMonotonicSubarray(nums));
