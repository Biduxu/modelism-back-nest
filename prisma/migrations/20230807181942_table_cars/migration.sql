-- CreateTable
CREATE TABLE "cars" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "lastClean" TEXT,
    "coverImage" TEXT,
    "createdAt" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
