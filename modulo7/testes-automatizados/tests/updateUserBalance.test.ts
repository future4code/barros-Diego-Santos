import { updateBalance } from "../src/functions/updateBalance";
import { User } from "../src/model/userModel";

describe("Teste de funcões para entidade cliente", () => {
  const user:User = {
    name:"Diego",
    balance: 50
  };

  // a) Faça um teste com um usuário com o saldo maior do que o valor de compra //
  test(" !-- Testa se tem saldo suficiente --! ", () => {
    const result = updateBalance(user,30)
    console.log(result);
    expect(result).toEqual({name:"Diego",balance:20})
  });
  // b) Faça um teste com um usuário com o saldo igual ao valor de compra //
  test(" !-- Testa se o saldo é igual ao valor da compra --! ", () => {
    const result = updateBalance(user,50);
    console.log(result);
    expect(result).toEqual({name:"Diego",balance:0})
  })
  // c) Faça um teste com um usuário com o saldo menor do que o valor de compra //
  test(" !-- Testa se o saldo é menor que o valor --! ", () => {
    const result = updateBalance(user,70);
    console.log(result);
    expect(result).not.toBeDefined()
  })
});