import { User } from "../model/UserModel";

export  interface UserRepository {
  getUserById(id: string): Promise<User | undefined>
}