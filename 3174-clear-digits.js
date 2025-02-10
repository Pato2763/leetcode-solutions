const clearDigits = (s) => {
  const testRegex = /\d/;
  if (!testRegex.test(s)) return s;
  const regex = /[a-z]\d/;
  const newString = s.replace(regex, "");
  return clearDigits(newString);
};

console.log(clearDigits("abc23"));
