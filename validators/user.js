import Joi from "joi";

export const registerUserValidator= Joi.object({
    name: Joi.string(). required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

export const loginUserValidation = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
})