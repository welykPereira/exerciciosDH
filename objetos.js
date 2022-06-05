// Objeto literal
let pais = {
  nome: 'Brasil', 
  capital: 'Brasilia',
  nacionalidade: function(){
    return `Sou do ${this.nome}`; 
  }
}

console.log(pais.nacionalidade()); 

// Funcao construtora 

// Criar uma funcao, para criar objetos 
function Carro(Vmarca, Vmodelo, Vano){
  this.marca = Vmarca;
  this.modelo = Vmodelo
  this.ano = Vano;
};

console.log(new Carro('Fiat', 'Uno', 1998)); 







