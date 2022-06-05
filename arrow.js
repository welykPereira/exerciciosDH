// Arrows functioons sao funcoes de formas simplificadas

const somar = (x, y) => console.log(x+y); 
somar(10,35);


// Com apenas um parametro nao precisa colocar entre ()
const parOuimpar = x => { // Quando a funcao contem condicionais vai ter que usar chaves nao tem jeito
  if(x % 2 == 0){
    return `O numero ${x} é Par`;
  }else{
    return `O numero ${x} é Impar`;
  }
}
console.log(parOuimpar(1));


const cadastro = (nome, idade, estadoCivil, cnh) => console.log(`Eu ${nome} tenho ${idade} anos, sou ${estadoCivil} e ${cnh} tenho cnh!`);
cadastro('welyk', 27, 'solteiro', 'sim'); 


// Uma funcao sem paramentro que possua um RETURN e obrigatorio o uso de chaves; O Return nao pode ser executado na mesma linha.
const funcaoArrowSemParamentro = () => {
  return 'Funcao sem paramentro';
}
console.log(funcaoArrowSemParamentro());
