import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound } from "../error/customError";
import {
  UserInputDTO,
  UserT,
  EditUserInputDTO,
  EditUserInput,
  AuthenticationData,
  LoginInputDTO,
  UserProfile,
} from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";



export class UserBusiness {
  private generateId = new IdGenerator();
  private authenticator = new Authenticator();
  private userDatabase = new UserDatabase();

  public signup = async (input: UserInputDTO):Promise<string> => {
    try{
      const { name, nickname, email, password } = input;

      if(!name || !nickname || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      };
      if(name.length < 4) {
        throw new InvalidName();
      };
      if(!email.includes("@")) {
        throw new InvalidEmail();
      };
      if(password.length < 6){
        throw new InvalidPassword
      }
      const id: string = this.generateId.generateId();
      const user:UserT = {
        id,
        name,
        nickname,
        email,
        password,
      };
      await this.userDatabase.insertUser(user);
      const token = this.authenticator.generateToken({id});
      return token;

    }catch(error: any){
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO):Promise<void> => {
    try {
      const { name, nickname, token } = input;

      if (!name || !nickname) {
        throw new CustomError(
          400,
          'Preencha os campos "id", "name" e "nickname"'
        );
      };
      if (name.length < 4) {
        throw new InvalidName();
      };
      const {id} = this.authenticator.getTokenData(token)

      const editUserInput: EditUserInput = {
        id,
        name,
        nickname,
      };
 
      await this.userDatabase.editUser(editUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO):Promise<string> => {
    try{
      const { email, password } = input;

      if(!email || !password){
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        );
      };
      if(!email.includes("@")){
        throw new InvalidEmail();
      };
      
      const user = await this.userDatabase.findUserByEmail(email)
      if(!user){
        throw new UserNotFound()
      }else if(user.password !== password){
        throw new InvalidPassword()
      };

      const token = this.authenticator.generateToken({id:user.id});
      return token;

    }catch(error: any) {
      throw new CustomError(400, error.message);
    }
  };

  getProfile = async (tokenInput:string):Promise<UserProfile> => {
    try{
      if(!tokenInput){
        throw new CustomError(
          400,
          'Passe o token do usuario com o metodo authorization'
        );
      };
      
      const {id} = this.authenticator.getData(tokenInput)
      
      const getUser:UserT = await this.userDatabase.getProfile(id)
      const user:UserProfile = {
        id: getUser.id,
        email: getUser.email
      };

      return user
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
