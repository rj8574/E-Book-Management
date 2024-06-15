import { User } from './userTypes';
import mongoose from "mongoose";

const userSchema= new mongoose.Schema<User>({
    
    name :{
        type:String,
        required:true,
    },
    email :{
        type:String,
        required:true,
        unique :true,
    },
    password :{
        type:String,
        required:true,
    },
},{timestamps : true})

const users = mongoose.model<User>('User', userSchema);
export default users;