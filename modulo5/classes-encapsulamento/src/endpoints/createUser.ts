import { Request, Response } from "express"
import {connection} from "../database/connection"
import { User } from "../class/User"
import { UserDB } from "../class/UserDB"

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            throw new Error("Body inválido.")
        }

        const newUser = new User(Date.now().toString(),email,password)
        const conect = new UserDB(connection);
        await conect.insertUser(newUser)
        
        
        res.status(201).send({ message: "Usuário criado", user: newUser })
    } catch (error) {
        res.status(errorCode).send({ message: error })
    }
}