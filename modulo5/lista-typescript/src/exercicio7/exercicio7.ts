
type Estoque = {
  nome: string,
  quantidade: number,
  valorUnitario:number
};

type NovoEstoque = {
  nome: string,
  quantidade: number,
  valorUnitario:string,
}
const estoque:Estoque[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

const estoqueOrganizado = (estoq:Estoque[]) :NovoEstoque[]=> {

  const novoEstoque:NovoEstoque[] = estoq.map( (produto:Estoque):NovoEstoque => {
    return {
      nome: produto.nome, 
      quantidade:produto.quantidade, 
      valorUnitario: ajustaPreco(produto.valorUnitario)
    }
  }) 

  return novoEstoque.sort( (a:NovoEstoque,b:NovoEstoque) :number => {
    if(a.quantidade > b.quantidade){
      return 1;;
    } else if(a.quantidade < b.quantidade) {
      return -1;
    } else {
      return 0;
    }
  })
}
console.table(estoqueOrganizado(estoque));