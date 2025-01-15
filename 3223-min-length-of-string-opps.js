const minimumLength = (s) => {
  const letters = {};
  for (let i = 0; i < s.length; i++) {
    if (!letters[s[i]]) {
      letters[s[i]] = 1;
    } else {
      letters[s[i]] += 1;
    }
  }
  let length = s.length;
  Object.values(letters).forEach((value) => {
    length -= 2 * Math.floor((value - 1) / 2);
  });
  return length;
};

const s = "abaacbcbb";
console.log(minimumLength(s));
