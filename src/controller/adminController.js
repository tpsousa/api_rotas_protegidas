const users = require("../model/users");
const { username, password, paper } = require("../model/users")

const express= require('express')

const adminController = {
  index:(req,res)=>{
    res.render('/')
  },


  showusers:(req,res)=>{
    return users
  },

  showusersbyid:(req,res)=>{ //tem que criar as rotas

  },

  createUser:(req,res)=>{
    id: user.id;
    username: username;
    password: password;
    paper: paper

  },

  deleteUser:(req,res)=>{
    const {username,password,email} = req.body
    const user = users.find(user => user.username !==user)
  },

// acho que isso aqui e no model,mas talvez pode deixar dentro do controller,mas acho que a ideia e praticar todo conhecimento que foi visto ate aqui
}