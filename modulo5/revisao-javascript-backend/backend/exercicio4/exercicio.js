console.log("exercicio 4");

const firtList = [
  { name: "Banana" },
  { name: "Laranja" }
]
const secondList = [
  {name: "Laranja"},
  {name: "Cebola"}
]

const newList = []
const generateUniqueItems = (item1, item2) => {
  const seeItem1 = item1.map( name => name.name)
  const seeItem2 = item2.map( name => name.name)
  // const seeFirtList = firtList.find( item => item1.name === seeItem1)
  // // console.log(seeFirtList)
  // let test;
  for( i = 0; i < item1.length; i++){
    newList.push(item1[i].name) 
  }
  // item2.filter( iten => iten.name !==)
  // return console.log(seeItem1,seeItem2)
} 
generateUniqueItems(firtList,secondList)
console.log(newList)
// firtList.map( test => console.log(test.name.includes("Banana")))

