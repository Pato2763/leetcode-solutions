const words = ["pay", "attention", "practice", "attend"];
const pref = "at";

const prefixCount = (words, pref) => {
  return words.filter((word) => {
    const regex = new RegExp(`^${pref}`);
    return regex.test(word);
  }).length;
};

// after realised that instead of the regex I could have used words.startsWith(pref) for a faster solution

console.log(prefixCount(words, pref));
