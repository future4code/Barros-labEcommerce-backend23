import { Request, Response } from "express"
import connection from "../connection"
import * as allTypes from '../types'

export default async function (req:Request, res:Response):Promise<void> {
        
        const result :allTypes.character[]  = await connection.raw(
                `
                        SELECT * FROM movie
                `
        )
        res.send(result)

}