var findDifference = function (nums1, nums2) {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);

  const difference = [];
  difference.push([...nums1Set.difference(nums2Set)]);
  difference.push([...nums2Set.difference(nums1Set)]);

  return difference;
};

console.log(findDifference([1, 2, 3], [2, 3, 4, 5]));
