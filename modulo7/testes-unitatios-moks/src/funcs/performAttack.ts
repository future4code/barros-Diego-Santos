import { Character } from "../model";
import { validateCharacter } from "./validateCharacter";


export const performAttack = (
  attacker:Character, defender:Character, validator: (char:Character) => boolean) => {
 
  if(!validator(attacker) || !validator(defender)){
    throw new Error("Personagem invalido")
  }else if(attacker.strength > defender.defense){
    defender.life -= attacker.strength - defender.defense;
  }
  
};