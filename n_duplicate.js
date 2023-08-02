// 1st normal approach
// let arr = [1, 2, 2, 3, 4, 4, 5]
// const unique = new Set()
// let mod_arr = []

// for (let i = 0; i < arr.length; i++) {
//     if (!unique.has(arr[i])) {
//       unique.add(arr[i])
//       mod_arr.push(arr[i])
//     }
//   }
// console.log(mod_arr)

// 2nd
let arr = [1, 2, 2, 3, 4, 4, 5]
mod_arr = [...new Set(arr)] //used spread operator to convert set back into array(...)
console.log(mod_arr)
