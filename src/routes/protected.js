const verifyToken = require("../middlewares/authMiddlewares")
const authRouter = require("./authenticated")

const express = require(express)

authRouter.router('/protected',verifyToken,(req,res)=>{
  res.json({message : 'this is a protected route,welcome and enjoy'})
})