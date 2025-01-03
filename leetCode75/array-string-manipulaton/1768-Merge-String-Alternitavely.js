var mergeAlternately = function (word1, word2) {
  let mergedStr = "";
  for (let i = 0; i < word1.length || i < word2.length; i++) {
    if (!word1[i]) return mergedStr + word2.slice(i);
    if (!word2[i]) return mergedStr + word1.slice(i);
    mergedStr += word1[i];
    mergedStr += word2[i];
  }
  return mergedStr;
};

console.log(mergeAlternately("abc", "pqrs"));
