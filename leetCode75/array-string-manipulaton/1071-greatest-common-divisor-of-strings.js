const gcdOfStrings = (str1, str2) => {
  if (str1 === str2) return str1;

  let lower = "";
  let higher = "";
  if (str1 < str2) {
    lower = str1;
    higher = str2;
  } else {
    lower = str2;
    higher = str1;
  }

  for (let i = lower.length; i >= 0; i--) {
    const valid = higher.length % i === 0 && lower.length % i === 0;
    if (valid) {
      const numHigher = higher.length / i;
      const numLower = lower.length / i;
      console.log({ numHigher, numLower });

      const strTest = lower.slice(-i);
      const higherTest = new Array(numHigher).fill(strTest).join("");
      const lowerTest = new Array(numLower).fill(strTest).join("");
      console.log({ strTest, higherTest, lowerTest });

      if (higherTest === higher && lowerTest === lower) {
        return lower.slice(-i);
      }
    }
  }
  return "";
};

console.log(
  gcdOfStrings(
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
  )
);
