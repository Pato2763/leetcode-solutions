const largestNumber = function (nums) {
  const numString = nums.map((element) => element.toString());

  numString.sort((a, b) => b + a - (a + b));

  if (numString[0] === "0") {
    return "0";
  }

  return numString.join("");
};

module.exports = largestNumber;
