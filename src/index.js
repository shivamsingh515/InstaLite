
const express = require("express");
const prisma = require("./db");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");

  prisma.$queryRaw`SELECT 1`
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.log("Database connection failed:", error));
});
