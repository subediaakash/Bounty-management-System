import { Router } from "express";
import { Signup } from "../controllers/auth.controller";

export const authRoute = Router();

authRoute.post("/signup", Signup);
