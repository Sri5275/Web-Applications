let p="aaaabbababababbbbabababaaaa";
let a=p.split('');
const counts = {};

for (const str of a) {
  counts[str] = counts[str] ? counts[str] + 1 : 1;
}

console.log("The counts of a:",counts['a']);
console.log("The counts of b:",counts['b']);
