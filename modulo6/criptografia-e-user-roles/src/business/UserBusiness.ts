import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, Unauthorized, UserNotFound } from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
  LoginInputDTO,
  USER_TYPE,
} from "../model/user";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

const idGenerator = new IdGenerator()
const tokenGenerator = new TokenGenerator()
const userDatabase = new UserDatabase();

export class UserBusiness {
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, nickname, email, password, role } = input;

      if (!name || !nickname || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }
      if(role !== USER_TYPE.ADMIN && role !== USER_TYPE.NORMAL){
        throw new CustomError(422,"Insira o role(tipo) de usuário valido 'admin' ou 'normal' ")
      }

      const id: string = idGenerator.generateId()

      const user: user = {
        id,
        name,
        nickname,
        email,
        password,
        role
      };
   
      await userDatabase.insertUser(user);
      const token = tokenGenerator.generateToken(id,role)

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;
    
      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos"email" e "password"'
        );
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await userDatabase.findUser(email);

      if (!user) {
        throw new UserNotFound()
      }

      if(password !== user.password){ 
        throw new InvalidPassword()
      }

      const token = tokenGenerator.generateToken(user.id,user.role)
     
      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, nickname, id, token } = input;

      if (!name || !nickname || !id || !token) {
        throw new CustomError(
          400,
          'Preencha os campos "id", "name", "nickname" e "token"'
        );
      }

      const data = tokenGenerator.tokenData(token)

      if(!data.id) {
        throw new Unauthorized()
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      const editUserInput: EditUserInput = {
        id,
        name,
        nickname,
      };

      const userDatabase = new UserDatabase();
      await userDatabase.editUser(editUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserById = async(token:string)=>{
    try {
      const tokenGenerator = new TokenGenerator()
      const authenticationData = tokenGenerator.tokenData(token);
      if(!authenticationData){
        throw Unauthorized
      };
      if(authenticationData.role !== "normal") {
        throw new CustomError(400,"Somente para usuários normais");
      }

      const userDatabase = new UserDatabase()
      const getUser = await userDatabase.getUserById(authenticationData.id);
      const user = {
        id:authenticationData.id,
        email:getUser.email,
        role:authenticationData.role
      }
      return user
    } catch (err:any) {
      throw new Error(err.message);
    }
}
}
