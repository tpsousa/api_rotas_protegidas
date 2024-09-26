
const express = require('express')

const app = express ()

app.use(express.json())

app.use(express.urlencoded({
  extended : true
}))

const port = 3000

app.listen(port,()=>{
 console.log('servidor esta funcionando com sucesso') 
})

module.exports = express