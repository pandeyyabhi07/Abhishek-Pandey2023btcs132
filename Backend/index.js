import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import contactRoutes from "./routes/contactRoutes.js";
import { PORT, MONGO_URL } from "./config/config.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("DB Error:", err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//5000