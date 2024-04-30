-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Painting" (
    "paintingId" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Rating" INTEGER NOT NULL,
    "Price" INTEGER NOT NULL,
    "Date" INTEGER NOT NULL,
    "ImageUrl" TEXT NOT NULL,

    CONSTRAINT "Painting_pkey" PRIMARY KEY ("paintingId")
);

-- AddForeignKey
ALTER TABLE "Painting" ADD CONSTRAINT "Painting_paintingId_fkey" FOREIGN KEY ("paintingId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
