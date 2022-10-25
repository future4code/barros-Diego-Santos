// Considerando o array abaixo, crie um ENUM para os setores e um type para as pessoas 
 // colaboradoras. Em seguida, crie uma função que receba este arraycomo parâmetro e retorne
 // apenas as pessoas do setor de marketing que trabalham presencialmente.  

enum SETORES  {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro",
}; 
type Person = {
  nome: string,
  salario: number,
  setor: string,
  presencial: boolean
};
const colaboradores: Person[] = [
	{ nome: "Marcos", salario: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salario: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: "marketing", presencial: true }
];

const filtrarColaboradores = (parametro:Person[]):Person[] => {
  const resultado:Person[] = parametro.filter( (pessoa:Person) => pessoa.setor === SETORES.MARKETING && pessoa.presencial)
  return resultado
}
console.table(filtrarColaboradores(colaboradores))