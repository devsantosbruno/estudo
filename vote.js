// 8) Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
// brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
// de eleitores

const whiteVotes = 9510
const nullVotes = 10521
const validVotes = 90980

const total = whiteVotes + null + validVotes
console.log('Número total de votos: ' + total)

let pWhite = (whiteVotes / total) * 100
console.log('\nNúmero total de votos nulos: ' + whiteVotes)
console.log('Percentual em relação ao total: ' + pWhite + '%')

let pNull = (nullVotes / total) * 100
console.log('\nNúmero total de votos nulos: ' + nullVotes)
console.log('Percentual em relação ao total: ' + pNull + '%')

let pValid = (validVotes / total) * 100
console.log('\nNúmero total de votos válidos: ' + validVotes)
console.log('Percentual em relação ao total: ' + pValid + '%')
