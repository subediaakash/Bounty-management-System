-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'STUDENT');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bounty" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "problemStatement" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "solved" BOOLEAN NOT NULL DEFAULT false,
    "solvedById" INTEGER,

    CONSTRAINT "Bounty_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Bounty" ADD CONSTRAINT "Bounty_solvedById_fkey" FOREIGN KEY ("solvedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
