let cotacaoDoDolarHoje = 4.97;
let valorMinimoDeCompraDeDolar = 100;
let valorMaximoDeCompraDeDolar = 2500;

function converterRealParaDolar(real) {
    let dollar = real / cotacaoDoDolarHoje
    if(dollar > valorMaximoDeCompraDeDolar){
      console.log(`A compra máxima permitida é de ${valorMaximoDeCompraDeDolar}`)
    }else if(dollar < valorMinimoDeCompraDeDolar){
      console.log(`A compra minima permitida é de ${valorMinimoDeCompraDeDolar} dolar. O seu ${real} reais só compra ${dollar} dollar`);
    }else{
      console.log(`Você pode comprar ${dollar}`)
    }
 }

 converterRealParaDolar(100);
 converterRealParaDolar(10000);
 converterRealParaDolar(100000);