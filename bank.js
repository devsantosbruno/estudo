class Cliente {
  nome
  cpf
  rg
}

class contaCorrente {
  agencia
  saldo
  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor
    }
  }
}

const cliente1 = new Cliente()
const cliente2 = new Cliente()

cliente1.nome = 'Bruno'
cliente1.cpf = '0' + 5064695063
cliente1.rg = 9124551749

cliente2.nome = 'Pâmella'
cliente2.cpf = 87587009000
cliente2.rg = 1234567899

const contaCorrenteBruno = new contaCorrente()
contaCorrenteBruno.saldo = 500
contaCorrenteBruno.agencia = 1001
contaCorrenteBruno.sacar(Math.round(Math.random() * 100))
console.log(contaCorrenteBruno.saldo)

const contaCorrentePam = new contaCorrente()
contaCorrentePam.saldo = 1500
contaCorrentePam.agencia = 1001
contaCorrentePam.sacar(Math.round(Math.random() * 100))
console.log(contaCorrentePam.saldo)

console.log(cliente1)
console.log(cliente2)
