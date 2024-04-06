import { Request, Response, NextFunction } from "express";
import { STATUS_CODE } from "../constants";
export const studentCheck = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = res.locals.user.role;
  if (user == "STUDENT") {
    next();
  } else {
    return res
      .status(STATUS_CODE.FORBIDDEN)
      .json({ msg: "Admin cant solve the bounty" });
  }
};
