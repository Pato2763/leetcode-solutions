const selfDividingNumbers = (left, right) => {
  const nums = [];
  for (let num = left; num <= right; num++) {
    if (selfDividingNum(num)) nums.push(num);
  }
  return nums;
};

const selfDividingNum = (num) => {
  let numArr = num.toString().split("");
  for (let i = 0; i < numArr.length; i++) {
    if (num % Number(numArr[i]) !== 0) return false;
  }
  return true;
};

console.log(selfDividingNumbers(47, 85));
