export type character = {
    id:number,
    name:string,
    gender:GENDER,
    description?: string
}

export enum GENDER {
    MALE = "male",
    FEMALE = "female",
    OTHERS = "others"
}