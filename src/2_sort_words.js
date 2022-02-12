module.exports = sortWords;

function sortWords(arr) {
  let obj = {
    odd: [],
    even: [],
  };
  for (const index of arr) {
    if (index.length % 2 === 0) {
      obj['even'].push(index);
    } else {
      obj['odd'].push(index);
    }
  }
  return obj;
}

console.log(sortWords([])); // {
// odd:  [],
// even: []
// }

console.log(sortWords(['work', 'hard', 'mommy'])); // {
// odd:  [ 'mommy' ],
// even: [ 'work', 'hard' ]
// }

console.log(sortWords(['oh!', 'ah!', 'hi', 'my'])); // {
// odd:  [ 'oh!', 'ah!' ],
// even: [ 'hi', 'my' ]
// }
