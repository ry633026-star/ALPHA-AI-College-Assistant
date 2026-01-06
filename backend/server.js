require("dotenv").config(); 

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");


const app = express();
app.use(cors());
app.use(express.json());
app.use("./api",authRoutes);

console.log("MONGO_URI =", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

  mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB connected");

  
    const adminExists = await User.findOne({ role: "admin" });

    if (!adminExists) {
      const hashed = await bcrypt.hash("admin123", 10);
      await User.create({
        name: "Admin",
        email: "admin@alpha.com",
        password: hashed,
        role: "admin",
      });
      console.log("✅ Default admin created");
    }
  })
  .catch(err => console.error("❌ MongoDB error:", err));



  app.use("/", authRoutes);
app.use("/admin", adminRoutes);

app.listen(5000, () => console.log("🚀 Server running"));

