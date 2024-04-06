import { Request, Response, NextFunction } from "express";
import { STATUS_CODE } from "../constants";
export const AdminCheck = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user.role;
  if (user == "ADMIN") {
    next();
  } else {
    return res
      .status(STATUS_CODE.FORBIDDEN)
      .json({ msg: "not enough permissions" });
  }
};
