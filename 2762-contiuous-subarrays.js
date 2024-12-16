nums = [5, 4, 2, 4];

var continuousSubarrays = function (nums) {
  const continuousCheck = (arr) => {
    sortedArr = arr.sort((a, b) => a - b);
    if (Math.abs(sortedArr[0] - sortedArr[sortedArr.length - 1]) <= 2)
      return true;
    return false;
  };
  let continuousArrays = 0;

  for (let i = 1; i <= nums.length; i++) {
    const NotReachedEnd = true;
    for (let j = 0; i + j <= nums.length; j++) {
      if (continuousCheck(nums.slice(j, j + i))) continuousArrays++;
    }
  }
  return continuousArrays;
};

continuousSubarrays(nums);
