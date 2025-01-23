const countServers = (matrix) => {
  let total = 0;
  const rows = new Array(matrix.length).fill(0);
  const columns = new Array(matrix[0].length).fill(0);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        rows[i] = rows[i] + 1;
        columns[j] = columns[j] + 1;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        console.log(rows[i], columns[j]);
        if (rows[i] > 1 || columns[j] > 1) {
          total++;
        }
      }
    }
  }
  return total;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const grid = [
  [1, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
];

console.log(countServers(grid));
