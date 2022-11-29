import { Request, Response } from "express"
import { characters } from "../data"

export default function (req:Request, res:Response):void{
    
    const { name, description, gender} = req.body

    // characters.push(
    //     {
    //         id:Date.now(),
    //         name:name,
    //         description:description,
    //         gender:gender
    //     }
    // )
    console.log(gender);
    
    res.status(201).send(name)
}