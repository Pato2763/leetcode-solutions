const countBadPairs = (nums) => {
  let badParirsCount = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] - nums[i] !== j - i) badParirsCount++;
    }
  }
  return badParirsCount;
};

console.log(countBadPairs([4, 1, 3, 3]));
