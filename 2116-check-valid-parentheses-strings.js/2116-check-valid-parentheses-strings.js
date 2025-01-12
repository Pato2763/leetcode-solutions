const canBeValid = (s, locked) => {
  if (s.length % 2 === 1) return false;

  console.log("here");

  const openParentheses = [];
  const unlockedParentheses = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" && locked[i] === "1") {
      openParentheses.push(i);
    } else if (locked[i] === "0") {
      unlockedParentheses.push(i);
    } else {
      console.log(openParentheses, i);
      if (openParentheses.length > 0) {
        openParentheses.pop();
      } else if (unlockedParentheses.length > 0) {
        unlockedParentheses.pop();
      } else {
        return false;
      }
    }
  }
  console.log(openParentheses, unlockedParentheses);
  while (
    openParentheses.length > 0 &&
    unlockedParentheses.length > 0 &&
    openParentheses[openParentheses.length - 1] <
      unlockedParentheses[unlockedParentheses.length - 1]
  ) {
    openParentheses.pop();
    unlockedParentheses.pop();
  }
  return openParentheses.length === 0 && unlockedParentheses.length % 2 === 0;
};

module.exports = canBeValid;
