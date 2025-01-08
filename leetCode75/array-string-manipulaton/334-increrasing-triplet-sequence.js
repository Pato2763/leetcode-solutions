var increasingTriplet = function (nums) {
  let firstNum = Infinity;
  let secondNum = Infinity;

  for (let i = 0; i < nums.length; i++) {
    console.log(firstNum, secondNum);
    if (nums[i] <= firstNum) {
      firstNum = nums[i];
    } else if (nums[i] <= secondNum) {
      secondNum = nums[i];
    } else if (nums[i] > secondNum) {
      return true;
    }
  }
  return false;
};

const nums = [2, 1, 5, 0, 4, 6];
const nums2 = [5, 4, 3, 2, 1];
const nums3 = [20, 100, 10, 12, 5, 13];
console.log(increasingTriplet(nums3));
