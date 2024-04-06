import { Request, Response } from "express";
import bcrypt from "bcrypt";
import createToken from "../utils/createToken";
import { PrismaClient } from "@prisma/client";
import { STATUS_CODE } from "../constants";
const prisma = new PrismaClient();

export const Signup = async (req: Request, res: Response) => {
  const { email, password, name, role } = req.body;
  try {
    if (!email || !name || !password || !role) {
      return res
        .status(400)
        .json({ message: "Email, name, password, and role are required" });
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return res.status(400).json({ message: "The user already exists" }); // Changed 'msg' to 'message'
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        name: name,
        role: role,
      },
    });

    const token = createToken({ email: email, role: role });

    return res.status(STATUS_CODE.ACCEPTED).json({
      message: "User created successfully",
      userEmail: newUser.email,
      token: token,
    });
  } catch (error) {
    console.error("Error in Signup:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
