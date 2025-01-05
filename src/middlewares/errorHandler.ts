import { Request, Response, NextFunction } from "express";
import CustomException from "../utils/customException";

const errorHandler = (
  err: Error | CustomException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomException) {
    // Handle CustomException
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  } else {
    // Handle generic errors
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }

  next();
};

export default errorHandler;
