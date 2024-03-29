// Observe a função a seguir, escrita em JavaScript:

// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo
//.ts e faça a tipagem desses parâmetro
type objetos = {
  maior: number ,
  menor: number ,
  media: number
}
function obterEstatisticas(numeros: number[]): objetos {
  const numerosOrdenados: number[] = numeros.sort(
    (a, b) => a - b
  ) ;

  let soma: number = 0

  for (let num of numeros) {
    soma += num
  } ;

  const estatisticas: objetos = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length
  } ;

  return estatisticas
} ;
console.log(obterEstatisticas([10,15,5,20,2,3,6,9]));
// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas.
// Resposta Abaixo!
  // const numerosOrdenados, essa variavel recebe a tipagem de array de numeros, com os valores crescente!
  // let soma, tipagem number
  // const estatisticas, tipagem de objetos de numeros

// c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades
//numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, 
//declarado em JavaScript:
type  DataSample = {
  numeros: number[],
  obterEstisticas: (numeros: number[]) => objetos
} ;

const sample: DataSample = {
  numeros: [10,15,24,55,14,13,2,7],
  obterEstisticas: obterEstatisticas,
} ;
console.log(sample.obterEstisticas(sample.numeros))

