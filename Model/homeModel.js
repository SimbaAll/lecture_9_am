import mongoose from "mongoose";

const Schema = mongoose.Schema

const detailSchema = new Schema({
    name: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    repeat_password: {type:String,required:true},
    city: {type:String,required:true},
},{timestamps:true})

export default mongoose.model('users',detailSchema)