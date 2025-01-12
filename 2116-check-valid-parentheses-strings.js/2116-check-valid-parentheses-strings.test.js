const canBeValid = require("./2116-check-valid-parentheses-strings");

describe("get Valid and invalid strings without using locked", () => {
  test("get true for ()", () => {
    const sTrue = "()";
    const sFalse = ")(";
    const locked = "11";
    expect(canBeValid(sTrue, locked)).toBe(true);
    expect(canBeValid(sFalse, locked)).toBe(false);
  });
});
describe("odd number of parentheses", () => {
  test("if the number of parentheses are odd then it will always be invalid", () => {
    s = "()()(";
    s2 = "(";
    s3 = "((()))((()))()(";
    expect(canBeValid(s, [])).toBe(false);
    expect(canBeValid(s2, [])).toBe(false);
    expect(canBeValid(s3, [])).toBe(false);
  });
  test("leetcode test cases", () => {
    expect(canBeValid("))()))", "010100")).toBe(true);
  });
});
