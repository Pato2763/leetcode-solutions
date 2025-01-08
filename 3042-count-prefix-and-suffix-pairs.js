words = ["a", "aba", "ababa", "aa"];

const countPrefixSuffixPairs = (words) => {
  let pairs = 0;
  words.forEach((word, index, array) => {
    for (let i = index + 1; i < array.length; i++) {
      if (word.length <= array[i].length) {
        const prefixCondition = array[i].slice(0, word.length) === word;
        const suffixCondition = array[i].slice(-word.length) === word;
        if (prefixCondition && suffixCondition) pairs += 1;
      }
    }
  });
  return pairs;
};

console.log(countPrefixSuffixPairs(words));
