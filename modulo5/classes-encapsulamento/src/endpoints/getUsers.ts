import { Request, Response } from "express"
import {connection} from "../database/connection"
// import { TABLE_USERS } from "../database/tableNames"
import { UserDB } from "../class/UserDB"

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {

        const conect = new UserDB(connection);
        const result = await conect.getUsers()
        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}