import { Response, NextFunction, Request } from "express";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "user registerd" });
};

export  { createUser };
