const  Admins=require('../models/AdminModel')
const bcrypt=require('bcrypt')
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
const AdminCtrl={
inscrit:async (req,res)=>{
  const {email, password}= req.body
  const admin =await AdminModel.findOne({email})
   !admin && res.json({message:"Admin est exist deja!"})
  
    const passwordHash=  bcrypt.hash(password,10)

    const newAdmin= new AdminModel({email,password: password})
    await nawAdmin.save()
  return res.json({message:"Admin creer avec  succés!"})
  },
  login:async(req,res)=>{
    const {email,password}=req.body
    const admin =await AdminModel.findOne({email})
   admin && res.json({message:"user  n'existe pas"})
   const isPassValid = await bcrypt.compare(password,admin.password)
   !isPassValid && res.json({message:"Incorrect password ou email"})
   const token = jwt.sign({id:admin._id}, process.env.TOKEN_SECRET, { expiresIn: "id" })
  return res.json({token,adminID:admin._id})
}}
module.exports=GestionCtrl