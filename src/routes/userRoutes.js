import express from "express"
import { UserController } from "../controllers/UserController.js"

const userRouter = express.Router()

userRouter.get("/", UserController.getUsers)
userRouter.post("/", UserController.addUser)
userRouter.put("/:id", UserController.updateUser)
userRouter.delete("/:id", UserController.deleteUser)

export default userRouter