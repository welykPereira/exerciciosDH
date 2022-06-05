// Essa é a lista de filmes disponibilizada pelo professor inicialmente.
let listaDeFilmes = ["Clube dos Cinco", "A Hora do Pesadelo", "Karatê Kid", "Rocky IV", "Conan, o Bárbaro", "Highlander"];

// 1.1. Apresenta todos os filmes da lista separados por ponto e vírgula.
function apresentaTodosOsFilmesSeparadosPorPontoVirgula() {
  return listaDeFilmes.join('; ');
}

console.log("1. Lista de todos os filmes separados por ponto e virgula \n", apresentaTodosOsFilmesSeparadosPorPontoVirgula());

console.log(`---------------------------------------`)
// 1.1. Apresentar quantidade de filmes da lista.
function quantidadeTotalDeFilmes() {
  return listaDeFilmes.length
}
console.log("2. Retorna a quantidade de filmes da lista \n", quantidadeTotalDeFilmes());

console.log(`---------------------------------------`)

// 1.3. Buscar o nome do filme de acordo com seu índice.
function buscarNomeDoFilmePeloIndice(indiceDoFilme) {
  return listaDeFilmes[indiceDoFilme]; 
}
console.log("3. Buscar um filme pelo indice \n", buscarNomeDoFilmePeloIndice(0));

console.log(`---------------------------------------`)

console.log("4. Adiciona um filme pelo nome \n")
// 1.4. Adiciona um novo filme a lista pelo seu nome.
function adicionaUmNovoFilmePeloSeuNome(nomeDoFilme) {
  let numero = listaDeFilmes.push(nomeDoFilme);
  for(let i = 0; i < numero; i++){
    console.log(listaDeFilmes[i]);
  }
}
adicionaUmNovoFilmePeloSeuNome("Sexta-feira 13th");

console.log(`---------------------------------------`)

console.log("5. Atualizar um filme pelo seu índice \n")
// 1.5. Atualiza um filme a partir do seu índice na lista.
function atualizarUmFilmePeloSeuIndice(nomeFilme, indiceDoFilme) {
  listaDeFilmes[indiceDoFilme] = nomeFilme;
  for(let i = 0; i < listaDeFilmes.length; i++){
    console.log(listaDeFilmes[i]);
  }
}
atualizarUmFilmePeloSeuIndice('Rock III', 3);

console.log(`---------------------------------------`)
console.log("6. Listar todos os filmes com seu indice/posicao na lista. \n")
// 1.6. Listar todos os filmes com seu índice/posição na lista.
function listarTodosOsFilmesComSeuIndiceNaLista() {
  for(let i = 0; i < listaDeFilmes.length; i++){
    console.log(`indice ${i} nome do filme: ${listaDeFilmes[i]}`)
  }
}
listarTodosOsFilmesComSeuIndiceNaLista();

console.log(`---------------------------------------`)
console.log("7. Lista quantidade de filmes desejado pelo usuário")
// 1.7. Listar filmes por quantidade.
function listarFilmesPorQuantidade(quantidadeDeFilmesDesejada) {
  for(let i = 0; i < quantidadeDeFilmesDesejada; i++){
    console.log(listaDeFilmes[i])
  }
}
listarFilmesPorQuantidade(3) 