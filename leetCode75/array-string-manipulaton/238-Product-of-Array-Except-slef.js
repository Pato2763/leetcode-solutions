const productExceptSelf = (nums) => {
  const length = nums.length;
  const numsLeftProduct = new Array(length);
  const numsRightProduct = new Array(length);

  numsLeftProduct[0] = 1;
  numsLeftProduct[1] = nums[0];
  for (let i = 2; i < length; i++) {
    numsLeftProduct[i] = numsLeftProduct[i - 1] * nums[i - 1];
  }
  numsRightProduct[length - 1] = 1;
  numsRightProduct[length - 2] = nums[length - 1];
  for (let i = length - 3; i >= 0; i--) {
    numsRightProduct[i] = numsRightProduct[i + 1] * nums[i + 1];
  }

  return numsLeftProduct.map((num, index) => {
    return num * numsRightProduct[index];
  });
};

console.log(productExceptSelf([1, 2, 3, 4]));
