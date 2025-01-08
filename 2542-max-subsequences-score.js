arr1 = [1, 3, 3, 2];
arr2 = [2, 1, 3, 4];

const maxScore = function (nums1, nums2, k) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  console.log(nums1, nums2[nums2.length - k]);
  return (
    nums1.slice(-k).reduce((acc, cv) => acc + cv, 0) * nums2[nums2.length - k]
  );
};

console.log(maxScore(arr1, arr2, 3));
