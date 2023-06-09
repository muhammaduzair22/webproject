
const { signup } = require("../Controller/userController");
const { login } = require("../Controller/loginController")
const { updateUser } = require("../Controller/updateuser")

const userRouter = require("express").Router();


userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.post("/update:id", updateUser)

module.exports = userRouter;



