import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { USER_ROLE } from "../../src/model/UserModel";



const userBusiness = new UserBusiness(
  new UserDatabaseMock()
);
describe("Teste pegar usuário por id", () => {
  test("Mostrar  erro se o id não existir", async () => {
    expect.assertions(2)

    try{
      await userBusiness.getUserById("feijao")
    }catch(error:any){
      expect(error.statusCode).toBe(404);
      expect(error.message).toBe("User Not Found")
    }
  });

  test("Mostra resultado em caso de sucesso", async () => {
    expect.assertions(2)
    try{
      const getUser = jest.fn( (id:string) => userBusiness.getUserById(id))
      const result = await getUser("id")
      
      expect(getUser).toHaveBeenCalledWith("id")
      expect(result).toEqual({
        id:"id",
        name:"bananinha",
        email:"email",
        password:"123456",
        role:USER_ROLE.ADMIN
      })
    }catch(error:any){
      console.log(error.message)
    }
  })

})