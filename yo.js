// 7) Faça um algoritmo que leia a idade de uma pessoa por data de nascimento e calcule em dias

const ano = 1991
const mes = 08
const dia = 26

const anoAtual = 2022
const mesAtual = 01
const diaAtual = 11

let anoDif = anoAtual - ano
let mesDif = mesAtual - mes
let diaDif = diaAtual - dia

if (anoDif < 0) {
  anoDif *= -1
}

if (mesDif < 0) {
  mesDif *= -1
}

if (diaDif < 0) {
  diaDif *= -1
}

let result = anoDif * 365 + mesDif * 30 + diaDif

console.log('Total em dias:')
console.log(result)
