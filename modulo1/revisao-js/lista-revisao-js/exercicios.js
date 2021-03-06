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
    const numeroMaior = Math.max(...array)
    return numeroMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maiorNumero = () => {
        if(num1 > num2){
            return num1
        } else { return num2 }
    } 
    
    const menorNumero = () => {
        if(num1 < num2){
            return num1
        } else { return num2}
    }
    
    const maiorDivisivelPorMenor  = () => {
        if(maiorNumero() % menorNumero() === 0){
            return true
        } else {
            return false
        }
    }
    const diferenca =  maiorNumero() - menorNumero()
    const objeto = {
        maiorNumero: maiorNumero(),
        maiorDivisivelPorMenor: maiorDivisivelPorMenor(),
        diferenca: diferenca 
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const  numerosPares = []
    for(let i = 0; i < n; i++){
        numerosPares.push(i * 2)
    }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    const tipoTriangulo = () => {
        if(ladoA === ladoB && ladoA === ladoC){
            return "Equilátero"
        } else if(ladoA === ladoB && ladoA !== ladoC){
            return "Isósceles"
        } else if(ladoA === ladoC && ladoA !== ladoB){
            return "Isósceles"
        } else if(ladoB === ladoC && ladoB !==ladoA){
            return "Isósceles"
        } else{
            return "Escaleno"
        }
    }
    return tipoTriangulo()
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const listaOrdenada =  array.sort( (a,b) =>{
        if(a > b ){return 1;}
        if(a<b){ return -1;}
        return 0;
    })
    const segundoMaiorSegundoMenor = [
        listaOrdenada[listaOrdenada.length-2],
        listaOrdenada[1]
    ]
    return segundoMaiorSegundoMenor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`  
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoalAnonima = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return pessoalAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutoriazas = pessoas.filter((p) =>{
        if(p.altura >= 1.5 && p.idade > 14 && p.idade < 60){
           return p
        }
    })
    return pessoasAutoriazas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutoriazas = pessoas.filter((p) =>{
        if( p.idade <= 14 || p.idade > 60 || p.altura < 1.5){
            return p  
        }
    })
    return pessoasNaoAutoriazas
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    (contas[0].saldoTotal= 500,contas[0].compras = [],
    contas[1].saldoTotal= 6260,contas[1].compras = [],
    contas[2].saldoTotal= -3340,contas[2].compras = [],
    contas[3].saldoTotal= -1900,contas[3].compras = [],
    contas[4].saldoTotal= 1300,contas[4].compras = [],
    contas[5].saldoTotal= 1200,contas[5].compras = [])
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    // esse codigo do namesOrder funciona, mas eu nao 
     // fiz isso , so coloquei aqui para ver se iria funcionar

   /*    
   function namesOrder(arrayObj){
        return arrayObj.sort(function(objA,objB) {
          a = objA.nome.toLowerCase().replace(/[àáâãäå]/,"a").replace(/[èéêë]/,"e").replace(/[ìíîï]/,"i").replace(/[òóôõö]/,"o").replace(/[ùúûü]/,"u").replace(/[ç]/,"c").replace(/[^a-z0-9]/gi,'')
          b = objB.nome.toLowerCase().replace(/[àáâãäå]/,"a").replace(/[èéêë]/,"e").replace(/[ìíîï]/,"i").replace(/[òóôõö]/,"o").replace(/[ùúûü]/,"u").replace(/[ç]/,"c").replace(/[^a-z0-9]/gi,'')
          return a < b ? -1 : a > b ? 1 : 0;
        })
    }
    return namesOrder(consultas)
    */
    
    // os dois codigos abaixo nao funciona
    
    
    return consultas.sort( (a,b) => {
        if(a.name > b.name){
            return -1;
        }
        if(a.name < b.name){
            return 1;
        }
        return 0;
    })
    

    // const ordemAlfabetica = consultas.sort((a,b) => a.nome - b.nome)
    // return ordemAlfabetica 
     
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    // codigo abaixo nao funciona
    const ordemData = consultas.sort((a,b) => a.dataDaConsulta - b.dataDaConsulta )
    return ordemData
}