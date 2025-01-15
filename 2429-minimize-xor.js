const minimizeXor = (num1, num2) => {
  let num1Binary = num1.toString(2);
  let num2Binary = num2.toString(2);

  if (num1Binary.length > num2Binary.length) {
    const length = num1Binary.length - num2Binary.length;
    num2Binary = Array.from({ length }, () => 0).join("") + num2Binary;
  } else if (num1Binary.length < num2Binary.length) {
    const length = num2Binary.length - num1Binary.length;
    num1Binary = Array.from({ length }, () => 0).join("") + num1Binary;
  }

  let numOfSetBits = num2Binary.match(/1/g).length;
  let x = "";
  console.log({ num1Binary, num2Binary, numOfSetBits });

  for (let i = 0; i < num1Binary.length; i++) {
    if (numOfSetBits === num1Binary.length - i) {
      x += "1";
      numOfSetBits--;
    } else {
      if (num1Binary[i] === "1" && numOfSetBits > 0) {
        x += "1";
        numOfSetBits--;
      } else {
        x += "0";
      }
    }
    console.log(x);
  }
  return parseInt(x, 2);
};

console.log(minimizeXor(25, 72));
