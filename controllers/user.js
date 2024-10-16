import { UserModel } from "../models/user.js";
import { loginUserValidation, registerUserValidator } from "../validators/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



export const registerUser = async (req, res, next) => {
    try {
        // validate user input
        const { error, value } = registerUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error)
        }
        // check if user does not exist
        const user = await UserModel.findOne({ email: value.email });

        if (user) {
            return res.status(409).json("User already exist!")
        }

        // you will hash their password
        const hashedPassword = bcrypt.hashSync(value.password, 10)

        //  save the user into database
        await UserModel.create({
            ...value,
            password: hashedPassword
        });
        // send confirmation email

        // respond to request
        return res.status(201).json("User registered");

    } catch (error) {
        next(error)
    }

};

export const loginUser = async (req, res, next) => {
    try {

        // validate user input
        const { error, value } = loginUserValidation.validate(req.body);
        if (error) {
            return res.status(422).json(error)
        }
        //  find one user with identifier
        const user = await UserModel.findOne({ email: value.email });
        if (!user) {
            return res.status(404).json("User does not exist")
        }
        // compare their passwords
        const correctPassword = bcrypt.compareSync(value.password, user.password)
        if (!correctPassword) {
            return res.status(401).json("Invalid credentials!");
        }

        // sign a token for the user
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_PRIVATE_KEY,
            { expiresIn: "24h" }
        );

        // respond to request
        res.status(200).json({
            message: "User logged in",
            accessToken: token
        });
    } catch (error) {
        next(error)
    }
};

export const getProfile = (req, res, next) => {
    res.json("User profile");
};


export const logoutUser = (req, res, next) => {
    res.json("User logged out");
};

export const updateProfile = (req, res, next) => {
    res.json("User profile updated")
}

