import { Request, Response } from "express"
import connection from "../database/connection"
import { UserDataBase } from "../database/UserDataBase"

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const conect = new UserDataBase(connection);
        const result = await conect.getAllUsers();
        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}