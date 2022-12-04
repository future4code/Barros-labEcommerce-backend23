import { Request, Response } from "express"
import connection from "../connection"
import { characters } from "../data"
import * as allTypes from '../types'

export default async function (req:Request, res:Response):Promise<void>{
    
    const { name, gender, description} = req.body
    try {
        if(Number(name)){
            const error = new Error("O nome nao pode incluir numeros!")
            error.name = "nameNotNumber"
            throw error
        }

        if(!name){
            const error = new Error("Nome não informado!")
            error.name = "nameNotGiven"
            throw error
        }
        if(!gender){
            const error = new Error("Genero não informado!")
            error.name = "genderNotGiven"
            throw error
        }

        // const result:allTypes.character[] = await connection("characters")
        // .insert({name, gender, description})
        // res.status(201).send(result)
        res.send("adicionado")

    } catch (error:any) {
            if(error.name === "nameNotGiven"){res.status(404).send(error.message)}
            else if(error.name === "genderNotGiven"){res.status(404).send(error.message)}
            else if(error.name === "genderNotNumber"){res.status(404).send(error.message)}
    }
}