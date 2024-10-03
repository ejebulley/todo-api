import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.js";


// create a router
const userRouter = Router();

// define router
userRouter.post("/users/register", registerUser);

userRouter.post("/users/login", loginUser);

userRouter.post("/users/logout", logoutUser);

// export default
export default userRouter;