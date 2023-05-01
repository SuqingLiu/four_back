-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "colors" TEXT[],

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);
