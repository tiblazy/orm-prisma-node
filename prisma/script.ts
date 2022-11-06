import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async () => {
  try {
    await prisma.$disconnect();
  } catch (error) {
    console.log("Cant Connect");
    await prisma.$disconnect();
  }
};
