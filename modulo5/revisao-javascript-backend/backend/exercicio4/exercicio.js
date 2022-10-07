console.log("exercicio 4");

const firtList = [
  { name: "Banana" },
  { name: "Laranja" }
]
const secondList = [
  {name: "Laranja"},
  {name: "Cebola"}
]

// essa foi a unica forma que consegui fazer, creio que se mudar o array a funcao nao vai funcionar como esperado
// mas ta feita igual o exercicio pediu :)
let newList;
const generateUniqueItems = (item1, item2) => {
  // const seeItem1 = item1.map( name => name.name)
  // const seeItem2 = item2.map( name => name.name)
  let diferent;
  item1.map( (elem) => {
   diferent = item2.find( element => element.name !== elem.name )
  })
  newList = item1.concat(diferent)
} 
generateUniqueItems(firtList,secondList)
console.log(newList)


