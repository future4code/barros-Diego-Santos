import { Character } from "../model";

export const validateCharacter = (char: Character):boolean => {
  let result:boolean;
  [!char.name || !char.defense || !char.life || !char.strength ? result = false :
    char.life <= 0 || char.strength <= 0 || char.defense <= 0 ? result = false : 
    result = true 
  ]

  return result
};
