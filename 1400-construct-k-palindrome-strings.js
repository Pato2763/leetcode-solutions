const canConstruct = (s, k) => {
  if (s.length < k) return false;
  let count = 0;
  const prevLookedAt = [];
  for (let i = 0; i < s.length; i++) {
    if (prevLookedAt.indexOf(s[i]) === -1) {
      prevLookedAt.push(s[i]);
      const re = new RegExp(s[i], "g");
      count += s.match(re).length % 2;
    }
  }
  console.log(count);
  return count <= k;
};

const s = "yzyzyzyzyzyzyzy";
const k = 2;

console.log(canConstruct(s, k));
