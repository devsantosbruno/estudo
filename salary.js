/*
24) Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
ultrapassar este valor, calcular e escrever o seu salário total.
*/

let vendas = [1500, 1200, 1800, 1000, 2500]
let salario = 2000

for (x of vendas) {
  if (x <= 1500) {
    let three = x * 0.03
    salario += three
  } else {
    let five = x * 0.05
    salario += five
  }
}

console.log('total salary with bonus: ' + salario)
