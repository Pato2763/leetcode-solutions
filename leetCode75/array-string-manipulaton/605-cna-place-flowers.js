var canPlaceFlowers = function (flowerbed, n) {
  let flowers = 0;
  if (!flowerbed.includes(1)) {
    return Math.ceil(flowerbed.length / 2) >= n;
  }
  flowerbed = flowerbed.join("");

  const startRegex = /^0+/g;
  const flowersStart = flowerbed.match(startRegex);
  console.log(flowersStart);
  if (flowersStart !== null) {
    flowers += Math.floor(flowersStart[0].length / 2);
    flowerbed = flowerbed.slice(flowersStart[0].length);
  }

  const endRegex = /0+$/g;
  const flowersEnd = flowerbed.match(endRegex);
  if (flowersEnd !== null) {
    console.log(flowersEnd);
    flowers += Math.floor(flowersEnd[0].length / 2);
    flowerbed = flowerbed.slice(0, flowerbed.length - flowersEnd[0].length);
  }

  const regex = /00+/g;
  const flowersMiddle = flowerbed.match(regex);

  if (flowersMiddle !== null) {
    flowers += flowersMiddle.reduce((acc, cv) => {
      return acc + Math.floor((cv.length - 1) / 2);
    }, 0);
  }
  console.log(flowers);

  return flowers >= n;
};

const flowerbed = [0, 0, 1, 0, 1, 0, 1, 0, 0];
const n = 1;

console.log(canPlaceFlowers(flowerbed, n));
