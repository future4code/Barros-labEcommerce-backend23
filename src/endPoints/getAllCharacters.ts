import { Request, Response } from "express"
import connection from "../connection"
import * as allTypes from '../types'

export default async function (req:Request, res:Response):Promise<void> {

        const {name, orderBy, page} = req.query
        const resultsPorPage = 5

        try {
                if(name){
                        const offset = resultsPorPage * (Number(page) - 1) 
                        const result :allTypes.character[]  = await connection("movie")
                        .where("name", "LIKE", `%${name}%`)
                        .orderBy(orderBy as string || "name" as string)
                        .offset(offset)
                        res.send(result)
                }
                const result :allTypes.character[]  = await connection("movie")
                res.send(result)
        } catch (error:any) {
                console.log(error.message);
                
        }

}