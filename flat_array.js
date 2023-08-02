let input = [
  [1, 2],
  [3, 4],
  [5, 6],
]
const new_ = input.flat()
console.log(new_)
// so we use flat function here and it also takes an argument so if we a array in which we have a nested arrays then give(Infinity)i.e lowest possibe deep level
const arr = [
  [1, 2, [3, 4]],
  [5, [6, [7, 8]]],
]
const new_arr = arr.flat(Infinity)
console.log(new_arr)
