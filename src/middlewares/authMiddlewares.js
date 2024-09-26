const authRouter = require("../routes/authenticated")
const jwt = require('jsonwebtoken')

function verifyToken(res,req,next){
  const token = req.header('authorization')

  if(!token){
    res.status(201).json({message : 'this token is invalid or not exists'})
  }

  try{
    // verificar e decodificar o token
    const verified = jwt.verify(token,'secret key')
    req.user = verified

    next()

  }catch(err){
    res.status(404).json({message : 'invalid token,please,verify your account to get a token'})
  }
}

module.exports = verifyToken