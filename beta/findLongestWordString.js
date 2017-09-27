// one option

// function findLongestWordLength(str) {
//   let longest = '';
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//       longest = words[i];
//     }
//   }
//   return longest;
// }

// another option

function findLongestWordLength(str) {
  let sorted = str.split(" ").sort((a, b) => {
    return a.length - b.length;
  })
  return sorted[sorted.length - 1];
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("I am like so totally sick of all of this crap, dudettesteress!"));
