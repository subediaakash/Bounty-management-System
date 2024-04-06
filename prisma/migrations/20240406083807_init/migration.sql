-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,

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

-- AddForeignKey
ALTER TABLE "Bounty" ADD CONSTRAINT "Bounty_solvedById_fkey" FOREIGN KEY ("solvedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
