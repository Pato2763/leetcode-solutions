const nums = [10, 4, -8, 7];

var waysToSplitArray = function (nums) {
  const numsCumulative = [];
  let total = 0;
  nums.forEach((num) => {
    total += num;
    numsCumulative.push(total);
  });
  let validSplits = 0;
  for (let i = 0; i < numsCumulative.length - 1; i++) {
    if (numsCumulative[i] >= total - numsCumulative[i]) {
      validSplits++;
    }
  }
  return validSplits;
};

console.log(waysToSplitArray(nums));
