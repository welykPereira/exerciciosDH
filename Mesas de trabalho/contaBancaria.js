const dadosPessoais = {
  nomeCompleto: 'Welyk Diemerson Bonfim Pereira',
  endereco: 'Rua: blablablabla numero 45',
  cidade: 'curitiba', 
  estado: 'parana',
  pais: 'brasil'  
}
const contaBancaria = {
  numeroAgencia: 5658,
  numeroConta: 828246-7, 
  saldoAtual: 455, 
  deposito: function (valor){
    return `O ${this.nomeCompleto} depositou ${valor} e seu saldo atual é ${this.saldoAtual + valor}`; 
  }, 
  saque: function (valor){
    return valor > this.saldoAtual ? `Voce nao pode sacar ${valor}, seu saldo atual e de ${this.saldoAtual}` : `Voce sacou ${valor} seu saldo agora e ${this.saldoAtual - valor}`; 
  },
  ...dadosPessoais
};

console.log(contaBancaria.saldoAtual); 

console.log(contaBancaria.deposito(45)); 

console.log(contaBancaria.saque(460));




























































