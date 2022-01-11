var numbers = []

// primeira forma
// for (n = 0; n < 8; n++) {
//   let ip = n % 2
//   if (ip != 0) {
//     numbers.push(n)
//   }
// }

// let par = numbers.length * 2
// numbers.push(par)

// console.log('Teste:')
// console.log(numbers)

// console.log('\nSolução:')
// for (x = 4; x >= 0; x--) {
//   console.log(numbers[x])
// }

// segunda forma
for (n = 0; n < 8; n++) {
  let ip = n % 2
  if (ip != 0) {
    numbers.push(n)
  }
}
let par1 = numbers.length * 2
numbers.push(par1)

console.log('Teste:')
console.log(numbers)

numbers = []

for (n = 0; n < 8; n++) {
  let ip = n % 2
  if (ip != 0) {
    numbers.unshift(n)
  }
}
let par2 = numbers.length * 2
numbers.unshift(par2)
console.log('\nSolução:')
console.log(numbers)
