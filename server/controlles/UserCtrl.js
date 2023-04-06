const  Users=require('../models/UserModel')
const bcrypt=require('bcrypt')
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
const UserCtrl={
    
inscrit:async(req,res)=>{
    const {nom,cin,tel,adresse,email,password}=req.body
        try {
            const userExist=await User.findOne({email})
            if (userExist) return res.status(400).json({msg:'email exist'})
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
            if (!passwordRegex.test(password)) {
               return res.status(400).json({ error: 'Password must contain at least one lowercase letter, one uppercase letter, one number and one special character' }) }
            const passwordHash=  bcrypt.hash(password,10)
            const newUser=new User({nom,cin,tel,adresse,email,password:passwordHash})
            await newUser.validate()
            await newUser.save()
            res.json({ msg: 'Inscription réussie' },newUser)
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:error.message})
        } 
         try {
          // Create new user
          const user = await User.create({ name, cin, tel, adresse, poste, email, password });
          return res.status(201).json(user);
        } catch (err) {
          return res.status(500).json({ error: 'Could not create user' });
        }},
getUser: async (req, res) => { 
try {
 const user = await User.findById(req.user.id).select('-password');
            if (!user) return res.status(400).json({ msg: 'L\'utilisateur n\'a pas été trouvé.' });
            res.json(user);
          } catch (err) {
            return res.status(500).json({ msg: err.message });
          }
        },
login:async(req,res)=>{
    const {email,password}=req.body
        try {
            const user=await User.findOne({email})
            if (!user) return res.status(400).json({msg:"user  n'existe pas"})
            const isMatch =  bcrypt.compare(password,user.password)
            if (!isMatch) return res.status(400).json({msg:"Incorrect password "})
            const payload = { id: user._id, name: user.name ,role: user.role }
            const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "id" })
            res.json({token})
        } catch (error) {
            res.status(500).json({msg:error.message})
        }    }}
        module.exports=UserCtrl
