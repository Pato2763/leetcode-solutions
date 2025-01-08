const gain = [-5, 1, 5, 0, -7];

var largestAltitude = function (gain) {
  let altitude = 0;
  let maxAltitude = 0;
  gain.forEach((change) => {
    altitude += change;
    if (maxAltitude < altitude) maxAltitude = altitude;
  });
  return maxAltitude;
};

console.log(largestAltitude(gain));
