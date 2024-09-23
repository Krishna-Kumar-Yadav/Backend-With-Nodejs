const express = require("express")
const app = express();

const userModel = require('./usermodel') 

app.get("/",(req,res)=>{
  res.send("kk")
})

app.get("/create",async(req,res)=>{
  let createdUser = await userModel.create({
    name : "krishna",
    username: "kk",
    email : "kk@gmail.com"
  })

  res.send(createdUser)
})

app.listen(3000)