import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userController from "./controllers/user.controller";

const app = express();

// load environmental variables
dotenv.config();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL;

// middleware
app.use(cookieParser());
app.use(express.json());
// TODO: reinstate cors
app.use(cors(
    {
        origin: FRONTEND_URL,
        credentials: true,
    }
));

// auth routes
app.post("/register", userController.registerUser);
app.post("/login", userController.loginUser);


//task routes

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
})

export default app;

