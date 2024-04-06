import { Router } from "express";
import { signIn, Signup } from "../controllers/auth.controller";

export const authRoute = Router();

authRoute.post("/signup", Signup);
authRoute.post("/signin", signIn);
