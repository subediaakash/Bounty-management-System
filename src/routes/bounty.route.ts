import { Router } from "express";
import { authMiddleware } from "../middleware/jwt.auth";
import { AdminCheck } from "../middleware/admin.check";
import {
  createBounty,
  solveBounty,
} from "../controllers/application.controller";
import { studentCheck } from "../middleware/student.check";
export const bountyRouter = Router();

bountyRouter.post("/new", authMiddleware, AdminCheck, createBounty);
bountyRouter.post(
  "/solve/:bountyId",
  authMiddleware,
  studentCheck,
  solveBounty
);
