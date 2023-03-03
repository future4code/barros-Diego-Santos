import { performAttack } from "../src/funcs/performAttack";
import { Character } from "../src/model";

describe("testes na função perform attack", () => {
  // a. De qual das duas funções (validateCharacter ou performAttack)  deveremos criar um Mock nos próximos testes? Justifique (escreva no seu código como comentário) 
   // Resposta: substitui a validadeCharacter porque é ela que verifica se o dado do personagem é valido e me retorna um booleando, que vou usar no performAttack como parametro no validador
  
  // b. Crie um Mock dessa função que represente a saída de sucesso do seu comportamento
  test.skip("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return true
    });
  });
  test.skip("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return false
		});
  });
  test.skip("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttack(attacker, defender, validatorMock as any);
    }catch(error){ 
      // nao sei se é bug mas , se colocar a typagem aqui no error do catch o teste nao passa e se nao colocar ele passa
      expect(error.message).toBe("Personagem invalido");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
});