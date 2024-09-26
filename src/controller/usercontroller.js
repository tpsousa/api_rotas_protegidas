const usercontroller ={
  getallusers : (req,res)=>{
    return users
  },
  getuserbyid:(req,res)=>{
    const user = users.find(user => user.id === id)
    return user
  },
  createuser :(req,res)=>{
    const {username,password,email} = req.body

    const user = {username,password,email}

    users.push(user)

    res.status(202).json({ message : 'usuario criado com sucesso'})
  },
  deletuser:(req,res)=>{
    const user = users.find(user => users.id !==id)
    users.splice(1,user)
    res.status(201).json({message : 'usuario deletado com sucesso'})
  },

  
}