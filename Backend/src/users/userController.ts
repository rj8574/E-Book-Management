import createHttpError, { HttpError } from 'http-errors';
import { Response, NextFunction, Request } from "express";
import users from './userModel';
const bcrypt = require('bcrypt');
const saltRounds = 10;

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const {name , email, password }=req.body
    if(!name || !email || !password)
    {
        const error = createHttpError(400 ,"All fields are mandatory")
        return next(error)
    }
   
    if(email == await users.findOne({email:email}))
    {
        const error =createHttpError(400 ,"user already exist ");
        return next(error)
        
    }
   const hashpassword= bcrypt.hash(password, saltRounds)


  res.json({ message: "user registerd" });
};

export  { createUser };
