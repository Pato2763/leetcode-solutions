const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var shiftingLetters = function (s, shifts) {
  const sArr = s.split("");
  shifts.forEach((shift) => {
    if (shift[2] === 1) {
      for (let i = shift[0]; i <= shift[1]; i++) {
        sArr[i] = alphabet[(alphabet.indexOf(sArr[i]) + 1) % 26];
      }
    } else {
      for (let i = shift[0]; i <= shift[1]; i++) {
        let newIndex = alphabet.indexOf(sArr[i]) - 1;
        if (newIndex < 0) newIndex = 25;
        sArr[i] = alphabet[newIndex];
      }
    }
    console.log(sArr);
  });
  return sArr.join("");
};

console.log(
  shiftingLetters("abc", [
    [0, 1, 0],
    [1, 2, 1],
    [0, 2, 1],
  ])
);
