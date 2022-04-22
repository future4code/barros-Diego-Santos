// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = prompt("Digite a altura! " );
  let largura = prompt("Digite a largura! ");
  let resultado = altura * largura;
  console.log(resultado);
  
}
/* testando
 altura = Number(prompt("digite a altura! " ))
 largura = Number(prompt("digite a largura! "))
 resultado = altura * largura
 console.log(resultado) 
*/ // aparentemente nao precisa fazer isso entao nao vou mais
   //me refiro a escrever o codigo fora da function

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Dgite o ano que você esta! "));
  let anoNascimento = Number(prompt("Digite seu ano de nascimento! "));
  resultado = anoAtual - anoNascimento;
  console.log(resultado);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura);
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Qual o seu nome? ");
  let idade = prompt("Qual sua idade? ");
  let email = prompt("Digite seu email");
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let corUm = prompt("");
  let corDois = prompt("");
  let corTres = prompt("");
  let array = [corUm, corDois, corTres];
  console.log(array);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();

}
  //let teste = "batatinha";
  //console.log(teste.toUpperCase());

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let espetaculo = custo  / valorIngresso;
  return espetaculo;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let entrada1 = string1.length == string2.length; 
  //nao sei porque funcionou, funciona com o > e com o  >= .
  // com != e foi para o teste: 3 < .
  return entrada1
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let ultimoarr = array[array.length-1]
  array[array.length-1]=array[0]
  array[0]= ultimoarr
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() == string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}