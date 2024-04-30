-- DropForeignKey
ALTER TABLE "Painting" DROP CONSTRAINT "Painting_userId_fkey";

-- AlterTable
ALTER TABLE "Painting" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Painting" ADD CONSTRAINT "Painting_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("username") ON DELETE SET NULL ON UPDATE CASCADE;
