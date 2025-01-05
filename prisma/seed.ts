import prisma from "../src/config/database";

async function seed() {
  await prisma.user.createMany({
    data: [
      { name: "John Doe", email: "john.doe@example.com" },
      { name: "Jane Doe", email: "jane.doe@example.com" },
    ],
  });

  await prisma.post.createMany({
    data: [
      { title: "First Post", content: "Hello world!", authorId: 1 },
      { title: "Second Post", content: "Prisma is great!", authorId: 2 },
    ],
  });

  console.log("Database seeding completed.");
}

seed()
  .catch((e) => {
    console.error("Error seeding the database", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
