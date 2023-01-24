import { UserDb } from "../data/UserDb";
import { InputType } from "../types/UserType";

export class UserBusiness {
  private table  = "User_Arq";
  private userDatabase = new UserDb();

  // --- --- -- -- -- -- - -- - -- -- -- -- - --  //
  getUsers = async () => {
    try{
      const result = await this.userDatabase.getUsers(this.table)
      return result
    }catch(error:any){
      throw new Error(error.message)
    }
  };
  // --- --- -- -- -- -- - -- - -- -- -- -- - --  //
  createUser = async (input:InputType):Promise<void> =>{
    try{
      const { name, email, password} = input;
      if( !name || !email || !password ){
        throw new Error("Dados faltando no body")
      };
      const id: string = Date.now().toString();

      await this.userDatabase.createUser({
        id,
        name,
        email,
        password
      })

    }catch(error:any){
      throw new Error(error.message)
    }
  };

  // --- --- -- -- -- -- - -- - -- -- -- -- - --  //
  deleteUser = async (id:string) => {
    try{
      if(!id || id === ":id"){
        throw new Error("insira o id de usuario!")
      }
      const users = await this.getUsers();
      const findUser = users.find( user => user.id === id)

      if(!findUser || findUser === undefined || findUser.length < 1){
        throw new Error("Id de usuario inexistente")
      }
      
      this.userDatabase.deleteUser(id,this.table)

    }catch(error:any){
      throw new Error(error.message)
    }
  }; 
}