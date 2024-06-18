import express from "express";
import createHttpError  from "http-errors";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./users/userRouter";
import bookRouter from "./book/bookRouter";


const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  const error = createHttpError(400, `something went wrong`);
  throw error;
  res.send("hello world");

  
});

app.use('/api/users',userRouter)
app.use('/api/',bookRouter)
app.use(globalErrorHandler);



export default app;
