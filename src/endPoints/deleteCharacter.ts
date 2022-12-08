import {Response, Request} from 'express'
import connection from '../connection'
import { characters } from '../data'

export default async function(req:Request, res:Response):Promise<void>{
    const  { id }  = req.params

    const result = await connection(`character`)
    .delete()
    .where({id})
     
   res.status(200).end()
}