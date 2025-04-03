import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import userModel from "../models/user.model"

// TODO: update type declarations

const registerUser = async (req: Request, res: Response): Promise<any> => {
    try {
        console.log("register endpoint");
        const  { email, password, username } = req.body;

        const existingUser = await userModel.findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ error: "User already exists." })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.createUser(email, hashedPassword, username);

        res.status(201).json({ user, message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Error registering user" });
    }
}

const loginUser = async (req: Request, res: Response): Promise<any>  => {
    try {   
        const { email, password } = req.body;

        const user = await userModel.findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ error: "User does not exist." })
        };

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) throw new Error("Invalid password")
        
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET as string, {
            expiresIn: "1h",
        })
    
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 1000,
        })

        res.json({ user, message: "Logged in successfully "});

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error logging in user" })
    }
}

const logoutUser = async (req: Request, res: Response): Promise<any>  => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    });

    res.json({ message: "Logged out successfully "});
}

export default { registerUser, loginUser, logoutUser };