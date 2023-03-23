import { User } from "../model/userModel";


export const updateBalance = (user:User, value:number):User | undefined => {
  let result:User|undefined;
  [ user.balance < value? result = undefined : 
    result = { ...user, balance: user.balance - value } 
  ]
  return result
};
