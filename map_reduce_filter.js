// map reduce and filter does not modify original array .map return a new array
// takes three argu (value,index,array)
let input = [2, 4, 6, 8, 10]
let sum = input.reduce((h1, h2) => {
  return h1 + h2
})
console.log(sum)

let avg = sum / input.length
console.log(avg)

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function numtoString(num) {
  let numString = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ]
  if (num >= 0 || num <= 10) {
    return numString[num]
  }
}

let ans = num.map(numtoString)
console.log(ans)
