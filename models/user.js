import { model, Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const userScheme = new Schema({
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true,
    },
    password: {
        type: String, required: true,
    },
    // avatar:{ type: string, required: true}
}, {
    timestamps: true
});

userScheme.plugin(toJSON);

export const UserModel = model("User", userScheme);