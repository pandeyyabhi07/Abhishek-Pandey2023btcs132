import express from "express";
import { sendContactEmail } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", sendContactEmail);

export default router;
