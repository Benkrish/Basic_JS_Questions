e_chunk = []
const a = (arr, size) => {
  while (arr.length > 0) {
    e_chunk.push(arr.splice(0, size))
  }
  return e_chunk
}

const Input = [1, 2, 3, 4, 5, 6, 7, 8]
const c_size = 3
const func = a(Input, c_size)
console.log(func)
