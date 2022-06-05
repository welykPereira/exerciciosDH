// .length
console.log(`--------------------------------.length---------------------------------------`);
let nome = 'Welyk'; 
console.log(nome.length) // Retorna 5

let arrayNomes = ['Welyk', 'Allana', 'Sonia'];
console.log(arrayNomes.length); //retorna 3




// .indexOf()
console.log(`-------------------------------.indexOF---------------------------------------`);

let saudacao = 'Ola! Estamos programando';
console.log(saudacao.indexOf('Estamos')); //Retorna 5 
console.log(saudacao.indexOf('vamos')); // Retorna -1, nao encontrou a palavra 
console.log(saudacao.indexOf('o')); // Encontra a letra 'o' que esta na posicao 10, retorna 10 e para execucao


console.log(`--------------------------------.slice()---------------------------------------`);
// .slice()

let frase = 'Breaking Bad Rules!'; 
console.log(frase.slice(9,12)); // Retorna 'Bad' 
console.log(frase.slice(13)); // Retorna 'Rules' 
console.log(frase.slice(-10)); // Retorna 'Bad Rules'


console.log(`--------------------------------.trim()---------------------------------------`);
// .trim(); 

let nomeCompleto = ' Welyk '; 
console.log(nomeCompleto.trim()); // Retorna 'Welyk' Sem os espacos antes e depois 


console.log(`--------------------------------.split()---------------------------------------`);
// .split()

let musica = 'Onde estiver seja la como for, tenha porque ate no lixao nasce flor!'
console.log(musica.split(' ')); // Converte a string em um array


console.log(`--------------------------------.replace()---------------------------------------`);
// .replace()

let frase2 = 'Forca, Python!'; 
console.log(frase2.replace('Python', 'Js')); // Retorna 'Forca, Js!'
console.log(frase2.replace('Pyth', 'JS')); // Retona 'Forca JSon!' 







