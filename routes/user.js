import { Router } from "express";
import { getProfile, loginUser, logoutUser, registerUser, updateProfile } from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";


// create a router
const userRouter = Router();

// define router
userRouter.post("/users/register", registerUser);

userRouter.post("/users/login", loginUser);

userRouter.get("/users/me", getProfile);

userRouter.post("/users/logout", logoutUser);

userRouter.post("/users/me", userAvatarUpload.single("avatar"), updateProfile)


// export default
export default userRouter;