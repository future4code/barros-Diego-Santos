// peguei essa funcao na net, infelizmente nao consegui fazer só
function factorialize(num:number) :number {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}


const anagrama = (palavra: string) :number => {
  const qtdLetras:number = palavra.length;
 
  return (qtdLetras * factorialize(qtdLetras - 1)) 
}
console.log(anagrama("palavr"))
