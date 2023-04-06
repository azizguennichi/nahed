const { Schema, model } = require('mongoose')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
// Créer le modèle pour les services

const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cin:{
        type:Number,
        required:true
    },
    tel:{
        type:Number,
        required:true
    },
    adresse:{
        type:String,
        required:true
    },
    role:{
      type:Number,
      default:0
  }
})
const UserModel =model("user",UserSchema)
module.exports = UserModel