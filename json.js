//-------------------- JSON.parse --------------//
let dadosJson = '{"boate": "Vegas", "Bairro": "Cajuru"}'; //Dados JSON 
let dadosJsonArray = '["Arroz", "Feijao", "Batata"]'; 

let converterParaObjeto = JSON.parse(dadosJson); // converte os dados JSON para um objeto
let converterParaArray = JSON.parse(dadosJsonArray); // Converte os dados Json para um ARRay

console.log(converterParaArray);
console.log(converterParaObjeto);

console.log(`----------------------------------------------------------------------------------------------`)

//-------------- JSON.stringfy -----------------//

let meuObjeto = { // Meu objeto 
  nome: 'welyk', 
  idade: 27, 
  Estado: 'Solteiro'
}; 

let meuArray = ['Pao', 'Presunto', 'Cafe']; // Meu Array

let conveterParaJson = JSON.stringify(meuObjeto); //Converto meu objeto para JSON string
let converterParaJsonArray = JSON.stringify(meuArray); //Converto meu array para JSON string

console.log(conveterParaJson);
console.log(converterParaJsonArray); 
