var compress = function (chars) {
  for (let i = 0; i < chars.length - 1; i++) {
    if (chars[i] === chars[i + 1]) {
      chars[i + 1] = 2;
      letterPointer = i;
    } else if (typeof chars[i] === "number" && chars[i - 1] === chars[i + 1]) {
      chars[i] = chars[i] + 1;
      chars.splice(i + 1, 1);
      i--;
    } else if (chars[i - 1] !== chars[i + 1]) {
      const str = chars[i].toString().split("");
      chars.splice;
    }
  }
  return chars.length;
};

const chars = ["a", "b", "b", "c", "c", "c"];
console.log(compress(chars), chars);
