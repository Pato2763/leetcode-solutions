const finalPrices = function (prices) {
  const newPrices = [];
  prices.forEach((price, index, array) => {
    newPrices.push(getReducedPrice(price, array.slice(index + 1)));
  });
  return newPrices;
};

const getReducedPrice = (price, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= price) return price - array[i];
  }
  return price;
};
