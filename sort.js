const Input = [
  { name: 'Alice', age: 25, info: { grade: 85 } },
  { name: 'Bob', age: 22, info: { grade: 90 } },
  { name: 'Eve', age: 23, info: { grade: 78 } },
]

const comp_grade = (a, b) => {
  a.info.grade - b.info.grade
}

Input.sort(comp_grade)
console.log(Input)

const comp_age = (a, b) => a.age - b.age
Input.sort(comp_age)
console.log(Input)

const mod_Input = [
  { name: 'AB', age: 25, info: { grade: 85 } },
  { name: 'AA', age: 22, info: { grade: 90 } },
  { name: 'A', age: 23, info: { grade: 78 } },
]

const comp_name = (a, b, c) => a.name.localeCompare(b.name, c.name) // localeCompare returns the num value so we can use that to sort
mod_Input.sort(comp_name)
console.log(mod_Input)
