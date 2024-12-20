var repeatLimitedString = function (s, repeatLimit) {
  const strArray = s.split("");
  strArray.sort().reverse();
  console.log(strArray);
  const lettersInARow = {};
  const lettersHigherThanLimit = [];

  strArray.forEach((letter) => {
    if (lettersInARow[letter] === undefined) {
      lettersInARow[letter] = 1;
    } else {
      lettersInARow[letter] += 1;
      if (lettersInARow[letter] > repeatLimit) {
        lettersHigherThanLimit.push(letter);
      }
    }
  });
  lettersArr = Object.keys(lettersInARow).map((letter) => {
    return [letter, lettersInARow[letter]];
  });

  const finalArr = [];
  let addOne = false;
  lettersInARow;
  for (let i = 0; i < lettersArr.length; i++) {
    if (addOne) {
      console.log(lettersArr[i]);
      finalArr.push(lettersArr[i][0]);
      lettersArr[i][1] = lettersArr[i][1] - 1;
      i--;
      addOne = false;
    }
    for (let j = 0; lettersArr[i][1] !== 0 && j < repeatLimit; j++) {
      finalArr.push(lettersArr[i][0]);
      lettersArr[i][1] = lettersArr[i][1] - 1;
    }
    if (lettersArr[i][1] !== 0) addOne = true;
  }
  return finalArr.join("");
};

const s = "xyutfpopdynbadwtvmxiemmusevduloxwvpkjioizvanetecnuqbqqdtrwrkgt";

console.log(repeatLimitedString(s, 1));
