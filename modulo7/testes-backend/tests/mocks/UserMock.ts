import { User, USER_ROLE } from "../../src/model/UserModel";

export const userMock:User ={
  id:"id",
  name:"bananinha",
  email:"email",
  password:"123456",
  role:USER_ROLE.ADMIN
};