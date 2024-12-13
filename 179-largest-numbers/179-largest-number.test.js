const largestNumber = require("./179-largest-number");

describe("largest number", () => {
  test("test case 1", () => {
    nums = [10, 2];
    expect(largestNumber(nums)).toBe("210");
  });
  test("test case 2", () => {
    nums = [3, 30, 34, 5, 9];
    expect(largestNumber(nums)).toBe("9534330");
  });
  test("when all the digits are zero", () => {
    nums = [0, 0, 0];
    expect(largestNumber(nums)).toBe("0");
  });
});
