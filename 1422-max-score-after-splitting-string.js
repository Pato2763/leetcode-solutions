s = "011101";

var maxScore = function (s) {
  let maxScore = 0;
  zeroMatch = /0/g;
  oneMatch = /1/g;
  for (let i = 1; i < s.length; i++) {
    let score = 0;
    const zeroScore = s.slice(0, i).match(zeroMatch);
    const oneScore = s.slice(i).match(oneMatch);
    if (zeroScore !== null) score += zeroScore.length;
    if (oneScore !== null) score += oneScore.length;
    if (maxScore < score) maxScore = score;
  }
  return maxScore;
};

console.log(maxScore(s));
