import jwt from "jsonwebtoken";
import { IPayload } from "../types/jwtPayload";

const createToken = (payload: IPayload) => {
  jwt.sign(payload, process.env.JWT_SECRET!);
};
