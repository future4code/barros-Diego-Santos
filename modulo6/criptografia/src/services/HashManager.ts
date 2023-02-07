import * as bcrypt from "bcryptjs";

export class HashManager{
  generateHash = async (plainText: string):Promise<string> => {
    const rounds:number = Number(process.env.BCRYPT_COST);
    const salt:string = await bcrypt.genSalt(rounds);
    const hash:string = await bcrypt.hash(plainText,salt)
    return hash
  };
  compareHash = async (plainText:string, hashText:string):Promise<boolean> => {
    const result = await bcrypt.compare(plainText,hashText)
    return result;
  }
};