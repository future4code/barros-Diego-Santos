import { CustomError } from "./CustomError"

export class InvalidDataMovie extends CustomError {
  constructor(){
    super(422,"Dados Faltando ")
  }
};
export class InvalidTypeNumber extends CustomError {
  constructor(){
    super(404,"A duração e o ano do filme precisa ser em number")
  }
}