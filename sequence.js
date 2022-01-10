var numbers = []

for (n = 0; n < 8; n++) {
  let ip = n % 2
  if (ip != 0) {
    numbers.push(n)
  }
}
let par = numbers.length * 2
numbers.push(par)
console.log('Teste:')
console.log(numbers)
console.log('\nSolução:')
console.log(numbers.reverse())
