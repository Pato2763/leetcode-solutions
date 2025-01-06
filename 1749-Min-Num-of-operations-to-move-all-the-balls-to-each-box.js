const minOperations = (boxes) => {
  const ballIndexes = [];
  const minNumOfOPerations = [];
  for (let j = 0; j < boxes.length; j++) {
    if (boxes[j] === "1") ballIndexes.push(j);
  }

  for (let i = 0; i < boxes.length; i++) {
    minNumOfOPerations.push(
      ballIndexes.reduce((acc, cv) => acc + Math.abs(i - cv), 0)
    );
  }
  return minNumOfOPerations;
};

console.log(minOperations("001011"));
