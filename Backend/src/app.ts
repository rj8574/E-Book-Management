import express, { Request, Response, NextFunction } from "express";
import createHttpError, { HttpError } from "http-errors";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./users/userRouter";

const app = express();

app.get("/", (req, res) => {
  const error = createHttpError(400, `something went wrong`);
  throw error;
  res.send("hello world");

  
});

app.use('/api/users',userRouter)
app.use(globalErrorHandler);


export default app;
