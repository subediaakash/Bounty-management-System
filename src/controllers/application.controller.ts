import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { STATUS_CODE } from "../constants";

const prisma = new PrismaClient();
export const createBounty = async (req: Request, res: Response) => {
  const { name, problemStatement, price } = req.body;
  const newBounty = await prisma.bounty.create({
    data: {
      name,
      problemStatement,
      price,
    },
  });
  res
    .status(STATUS_CODE.ACCEPTED)
    .json({ msg: "Problem statement added successfully", bounty: newBounty });
};

export const solveBounty = async (req: Request, res: Response) => {
  const bountyId = parseInt(req.params.bountyId);

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: res.locals.user.email,
      },
      include: {
        Bounty: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const updatedBounty = await prisma.bounty.update({
      where: {
        id: bountyId,
      },
      data: {
        solved: true,
        solvedById: user.id,
      },
    });

    const updatedUser = await prisma.user.update({
      where: {
        email: res.locals.user.email,
      },
      data: {
        Bounty: {
          connect: {
            id: updatedBounty.id,
          },
        },
      },
    });

    res.status(200).json({
      message: "Bounty solved successfully",
      bounty: updatedBounty,
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error solving bounty:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
