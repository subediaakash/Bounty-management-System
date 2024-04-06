import jwt from "jsonwebtoken";
import { IPayload } from "../types/jwtPayload";

const createToken = (payload: IPayload): string => {
  return jwt.sign(payload, process.env.JWT_SECRET!);
};

export default createToken;
