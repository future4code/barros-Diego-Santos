import { UserRepository } from "../../src/business/UserRepository";
import { CustomError } from "../../src/error/CustomError";
import { User } from "../../src/model/UserModel";
import { userMock } from "./UserMock";

export class UserDatabaseMock implements UserRepository{
  public async getUserById(id: string): Promise<User | undefined> {
    return id === "id" ? userMock : undefined
  }
}