/*
  Warnings:

  - You are about to drop the column `userId` on the `Painting` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Painting" DROP CONSTRAINT "Painting_userId_fkey";

-- AlterTable
ALTER TABLE "Painting" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "wishlist" TEXT[];
