 const express = require('express')
 const authRouter  = express.Router()
 const jwt = require('jsonwebpack')

 const bcryptjs = require('bcryptjs')
const users = require('../model/users')

 const secretKey = 'secretKey'


function generateToken (user){
 return jwt.sign({ id: user.id,email : user.email},secretKey,{
  expiresIn : '1h'
 })
}

if(users.lenght ===0){
  console.log('seja bem vindo visitante,fique a vontade para se registrar,ou fazer login se precisar') //poderia botar dentro de uma funcao maior,que enquanto o usuario nao clica em register ou login ele e visitante
}

 authRouter.post('/register',(req,res)=>{
   const {username,password,email,paper} = req.body
   const user = {username,password,email,paper}
   users.push(user)
   res.status(201).json()
   //poderia ter as regras de aplicacao aqui,como os tipos de emails e nomes validos,ou disponiveis
})

authRouter.post('/login',(req,res)=>{
  const {username,password,email,paper} =req.body

  const user = users.find(user => user.email === email)

  const validpassword= bcryptjs.compare(password,user.password)
  if(!username || typeof username !== username || users.username === username ){
    res.status(201).json({message : 'invalid username,this user name exists at database or the type is invalid,please try,again'})
  }

  const token = generateToken(user)

  res.json({token})
})

module.exports= authRouter