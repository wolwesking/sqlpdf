const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAllRecords() {
  try {
    const allRecords = await prisma.dOC_LEAO.findMany();

    console.log("All records:", allRecords);
    return allRecords;
  } catch (error) {
    console.error("Error retrieving records:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Call the function to get all records

module.exports = {
  getAllRecords,
};
