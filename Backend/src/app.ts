import express, { Request, Response, NextFunction } from "express";
import createHttpError, { HttpError } from "http-errors";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

app.get("/", (req, res) => {
  const error = createHttpError(400, `something went wrong`);
  throw error;
  res.send("hello world");
});

app.use(globalErrorHandler);


export default app;
