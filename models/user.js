import { model, Schema } from "mongoose";

const userScheme = new Schema({
    name: {
        type : String, required: true
    },
    email:{
        type: String, required: true ,
    },
    avatar:{ type: string, required: true}
})

export const UserModel = model