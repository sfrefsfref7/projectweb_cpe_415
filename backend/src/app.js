const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("MealTrack API is running");
});

// error middleware ต้องอยู่ล่างสุด
app.use(errorHandler);

module.exports = app;