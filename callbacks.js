const soma = (x, y) => x + y;
const subtracao = (x, y) => x-y;


const calculadora = (x, y, op) => op(x, y);

console.log(calculadora(10, 45, soma))

//-------------------------------------------------
let arraySites = ['globo.com', 'youtube.com', 'digitalhouse.com']; 

function adicionarHttp(url) {
    return `http://${url}`; 
}

function processar(array, op){
    for(let i = 0; i < array.length; i++){
       console.log(op(array[i]));  
    }
}
processar(arraySites, adicionarHttp); 

