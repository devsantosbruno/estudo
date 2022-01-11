var numbers = [19, 15, 63, 21]
console.log(numbers)

// for (i = 0; i <= numbers.length; i++) {
//   for (v = 0; v <= numbers.length; v++) {
//     if (numbers[v] >= numbers[i]) {
//       console.log(numbers[v])
//     }
//   }
// }
for (x = 0; x < numbers.length; x++) {
  for (guardar of numbers) {
    console.log(guardar)
  }

  console.log('\n\n')

  for (comparar of numbers) {
    if (comparar >= guardar) {
      console.log(comparar)
    }
  }
}
console.log(numbers)
