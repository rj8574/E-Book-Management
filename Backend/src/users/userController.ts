import { config } from './../config/config';
import { User } from './userTypes';
import createHttpError from 'http-errors';
import { Response, NextFunction, Request } from "express";
import users from './userModel';
const bcrypt = require('bcrypt');
import jwt from 'jsonwebtoken'
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
   const hashpassword= await bcrypt.hash(password, saltRounds)
   let newUser :User;
    newUser = await users.create({
    name,
    email,
    password:hashpassword
    })

    const token = jwt.sign({sub: newUser._id },config.jwtSecret as string, {       
        expiresIn: "7d",
        algorithm: "HS256" })
        res.status(201).json({accesToken :token})

 
};

export  { createUser };
