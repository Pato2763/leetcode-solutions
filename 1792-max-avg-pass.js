const classes = [
  [2, 4],
  [3, 9],
  [4, 5],
  [2, 10],
];
var maxAverageRatio = function (classes, extraStudents) {
  const classesRatios = [];

  classes.forEach((singleClass, index) => {
    for (let i = 1; i <= extraStudents; i++) {
      const ratioIncrease =
        (singleClass[0] + i) / (singleClass[1] + i) -
        (singleClass[0] + i - 1) / (singleClass[1] + i - 1);
      classesRatios.push({ classNum: index, ratioIncrease: ratioIncrease });
    }
  });

  classesRatios.sort((a, b) => a["ratioIncrease"] - b["ratioIncrease"]);
  console.log(classesRatios);
  const classesToAdd = classesRatios.slice(-extraStudents);
  console.log(classesToAdd);

  classesToAdd.forEach((classToAdd) => {
    classes[classToAdd.classNum][0] += 1;
    classes[classToAdd.classNum][1] += 1;
  });

  return (
    classes.reduce((acc, currVal) => {
      return currVal[0] / currVal[1] + acc;
    }, 0) / classes.length
  );
};

console.log(maxAverageRatio(classes, 4));
