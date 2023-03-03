import { validateCharacter } from "../src/funcs/validateCharacter";
import { Character } from "../src/model"

describe("Teste de validação de personagem ", () => {
  // a. Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, "".
  test.skip("deve retornar falso caso não tenha um nome", () =>{
    const ironMan:Character = {
      name:"",
      life:1500,
      defense:300,
      strength:400
    };
    expect(validateCharacter(ironMan)).toBe(false)
  });
  // b. Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero. 
  test.skip("deve retornar falso se a vida for 0", () => {
    const death:Character = {
      name:"SuperMan",
      life:0,
      defense:1500,
      strength:1500
    };
  
    expect(validateCharacter(death)).toBe(false)
  });
  // c. Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero. 
  test.skip("deve retornar falso se a força for 0", () =>{
    const sangueSuga:Character = {
      name:"sangue suga",
      life:10,
      defense:1,
      strength:0
    };

    expect(validateCharacter(sangueSuga)).toBe(false)
  });
  // d. Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero. 
  test.skip("deve retorna falso se a defeza for 0", () =>{
    const barata:Character = {
      name:"barata",
      life:10,
      defense:0,
      strength:100
    };

    expect(validateCharacter(barata)).toBe(false)
  })
  // e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo
  test.skip("deve retorna false caso tenho um valor negativo", () =>{
    const bacteria:Character ={
      name:"bacteria",
      life:1,
      defense:-100,
      strength:2
    }
    expect(validateCharacter(bacteria)).toBe(false) 
  })
  // Crie um teste que verifique o comportamento da função com um personagem com as informações validas
  test.skip("deve retorna false caso tenho um valor negativo", () =>{
    const saitama:Character ={
      name:"saitama",
      life:1500,
      defense:Infinity,
      strength:Infinity
    }
    expect(validateCharacter(saitama)).toBe(true) 
  })
})