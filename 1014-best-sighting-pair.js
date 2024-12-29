const sightings = [8, 1, 5, 2, 6];

// this works for smaller arrays but has a bad time complexity
function maxScoreSightseeingPair(sightings) {
  let bestScore = 0;
  for (let i = 0; i < sightings.length - 1; i++) {
    for (let j = i + 1; j < sightings.length; j++) {
      const score = sightings[i] + sightings[j] + i - j;
      if (score > bestScore) bestScore = score;
    }
  }
  return bestScore;
}

function maxScoreSightseeingPairBetter(sightings) {
  let bestScore = 0;
  let prevMax = 0;
  for (let j = 1; j < sightings.length; j++) {
    const i = j - 1;
    if (prevMax < sightings[i] + i) prevMax = sightings[i] + i;
    const score = prevMax + sightings[j] - j;
    if (bestScore < score) bestScore = score;
  }
  return bestScore;
}

console.log(maxScoreSightseeingPairBetter(sightings));
