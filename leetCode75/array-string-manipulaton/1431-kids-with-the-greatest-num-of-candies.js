const kidsWithCandies = (candies, extraCandies) => {
  let mostCandies = Math.max(...candies);
  return candies.map((candy) => {
    if (candy + extraCandies >= mostCandies) return true;
    return false;
  });
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
