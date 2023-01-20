import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'

export class UserBusiness {
  private userDatabase = new UserDatabase();

  create = async (input:any):Promise<void> => {
    try{
      const {name, email, password} = input;
      if (!email || !name || !password) {
        throw new Error("Dados inválidos (email, name, password)")
      }

      const id = generateId()
      
      await this.userDatabase.create({
        id,
        name,
        email,
        password
      })
    }catch(error:any){
      throw new Error(error.message)
    }
  };
  // ------------------------------------------------------//
  getUsers = async () => {
    try{
      const result = await this.userDatabase.getUsers();

      return result
    }catch(error:any){
      throw new Error(error.message)
    }
  };

}
