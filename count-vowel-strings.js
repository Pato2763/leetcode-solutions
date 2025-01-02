const words = ["aba", "bcb", "ece", "aa", "e"];
const queries = [
  [0, 2],
  [1, 4],
  [1, 1],
];

var vowelStrings = function (words, queries) {
  const regex = /^[aeiou]\w*[aeiou]$|^[aeiou]+$/;
  const vowelsArr = [0];
  words.forEach((word, index) => {
    const num = regex.test(word) ? 1 : 0;
    vowelsArr.push(vowelsArr[index] + num);
  });

  return queries.map((query) => {
    return vowelsArr[query[1] + 1] - vowelsArr[query[0]];
  });
};

console.log(vowelStrings(words, queries));
