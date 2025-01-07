var stringMatching = function (words) {
  return words.filter((word, index, array) => {
    const regex = new RegExp(`${word}`);
    console.log(word);
    for (let i = 0; i < array.length; i++) {
      console.log(regex.test(array[i]));
      if (i !== index && regex.test(array[i])) return word;
    }
  });
};

const words = ["leetcoder", "leetcode", "od", "hamlet", "am"];
console.log(stringMatching(words));
