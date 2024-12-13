var pickGifts = function (gifts, k) {
  if (gifts.length === 0) return 0;
  for (let i = 0; i < k; i++) {
    const largestNum = getLargest(gifts);
    gifts[gifts.indexOf(largestNum)] = Math.floor(Math.sqrt(largestNum));
  }
  console.log(gifts);
  return gifts.reduce((acc, currVal) => currVal + acc, 0);
};

const getLargest = (gifts) => {
  let largestNum = gifts[0];
  for (let i = 1; i < gifts.length; i++) {
    if (gifts[i] > largestNum) {
      largestNum = gifts[i];
      console.log(largestNum);
    }
  }
  return largestNum;
};
