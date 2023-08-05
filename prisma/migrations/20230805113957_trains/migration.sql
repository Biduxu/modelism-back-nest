-- CreateTable
CREATE TABLE "trains" (
    "id" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "railroad" TEXT NOT NULL,
    "number" TEXT,
    "coverImage" TEXT,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "trains_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "trains" ADD CONSTRAINT "trains_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
