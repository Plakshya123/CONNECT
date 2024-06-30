const dotenv = require("dotenv");
const express = require("express");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const PORT = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
dotenv.config();

connectDB();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
  console.log("Welcome to Connect".rainbow.bold);
  console.log(`http://localhost:${PORT}/`.yellow.bold);
  // console.log(`http://localhost:${PORT}/api/chats`);
});

app.use(notFound);
app.use(errorHandler);
