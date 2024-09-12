const Usercontroller = require("../Controller/user.controller")
const express = require("express")

const userRoutes = express.Router();

userRoutes.post("/register",Usercontroller.createUser);

module.exports = userRoutes;