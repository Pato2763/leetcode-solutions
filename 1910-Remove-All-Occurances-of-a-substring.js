const removeOccurrences = (s, part) => {
  const regex = new RegExp(part);
  const newString = s.replace(regex, "");
  if (newString.length === s.length) return s;
  return removeOccurrences(newString, part);
};

console.log(removeOccurrences("daabcbaabcbc", "abc"));
