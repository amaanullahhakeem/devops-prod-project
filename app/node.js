const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB URL from env
const MONGO_URL = process.env.MONGO_URL;

// Connect to MongoDB
mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("MongoDB Error ❌", err));

// Simple Schema
const UserSchema = new mongoose.Schema({
  name: String,
});

const User = mongoose.model("User", UserSchema);

// Routes

// Home
app.get("/", (req, res) => {
  res.send("Hello Aman Ullah- Ypu are ready for  DevOps 🚀");
});

// Health Check
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// Add user
app.post("/user", async (req, res) => {
  try {
    const user = new User({ name: req.body.name });
    await user.save();
    res.json({ message: "User added", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
