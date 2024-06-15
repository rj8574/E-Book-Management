import createHttpError, { HttpError } from 'http-errors';
import { Response, NextFunction, Request } from "express";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const {name , email, password }=req.body
    if(!name || !email || !password)
    {
        const error = createHttpError(400 ,"All fields are mandatory")
        return next(error)
    }
    

  res.json({ message: "user registerd" });
};

export  { createUser };
