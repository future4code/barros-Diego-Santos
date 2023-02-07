import { CustomError } from "./CustomError";

export class InvalidData extends CustomError {
  constructor(){
    super(404,"Dados inválidos (email, name, password)")
  }
}