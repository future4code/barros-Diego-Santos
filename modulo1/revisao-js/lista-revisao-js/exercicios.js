// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    // esse codigo do short praticamente copíei do MDN, eu nao entendi porque ele funciona
    return array.sort( (a,b) =>{
        if(a > b ){return 1;}
        if(a<b){ return -1;}
        return 0;
    } )
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    // o verdadeiro desafio para mim foi fazer com o filter, fiz isso ai em baixo com base
     // em um codigo que vi na net, sei o conceito e como funciona mas na hora de aplicar
      // tenho dificuldade tanto com o filter() quanto com o map()

    // exercicio com filter
    //const numerosPar = array.filter( (n) => n % 2 === 0)

    // Desafio abaixo sem o filter
    const  numerosPar = []
    for(let i=0; i < array.length; i++){
        if(array[i] % 2 === 0){
          numerosPar.push(array[i])
        }
    }
    return numerosPar
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const  numerosPar = []
    for(let i=0; i < array.length; i++){
        if(array[i] % 2 === 0){
          numerosPar.push(array[i])
        }
    }

    const numerosElevados = []
    for(let i = 0; i < numerosPar.length; i++){
        numerosElevados.push(Math.pow(numerosPar[i],2))
    }
    return numerosElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}