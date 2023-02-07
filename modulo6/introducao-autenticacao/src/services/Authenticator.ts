import * as jwt from "jsonwebtoken"; 
import { Unauthorize } from "../error/customError";
import { AuthenticationData } from "../model/user";


export class Authenticator {
  private jwtKey = process.env.JWT_KEY as string;
  private expiresIn = "1min"

  public generateToken = ({id}:AuthenticationData):string => {
    const token = jwt.sign(
      { id },
      this.jwtKey,
      { expiresIn:this.expiresIn }
    )
    return token
  };
  getTokenData = (token:string):AuthenticationData => {
    try{
      const payload = jwt.verify(token, this.jwtKey) as AuthenticationData;
      return payload
    }catch(error:any){
      throw new Unauthorize()
    };
  };
  getData = (token: string): AuthenticationData => {
    try{
      const payload = jwt.verify(token, this.jwtKey as string) as any;
      const result = {
        id: payload.id,
      };
      return result;
    }catch(error:any){
      throw new Unauthorize()
    };
  }; 
};

