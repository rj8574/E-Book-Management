import express from "express";
import createHttpError  from "http-errors";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./users/userRouter";
import bookRouter from "./book/bookRouter";
import cors from "cors";
import { config } from "./config/config";

const app = express();
app.use(cors({
  origin: config.frontendDomain
}))
app.use(express.json())

app.get("/", (req, res) => {
  const error = createHttpError(400, `something went wrong`);
  throw error;
  res.send("hello world");

  
});

app.use('/api/users',userRouter)
app.use('/api/books',bookRouter)
app.use(globalErrorHandler);



export default app;
